import { ref } from "vue";
import { useFetch, useRuntimeConfig } from "#app";

export function useVoiceRecorder() {
  const isRecording = ref(false);
  const mediaRecorder = ref(null);
  const audioChunks = ref([]);
  const transcribedText = ref("");
  const isTranscribing = ref(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.value = new MediaRecorder(stream);
      audioChunks.value = [];
      isRecording.value = true;

      mediaRecorder.value.ondataavailable = (event) => {
        audioChunks.value.push(event.data);
      };

      mediaRecorder.value.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorder.value) return;

    return new Promise((resolve) => {
      mediaRecorder.value.onstop = async () => {
        isRecording.value = false;
        await transcribeAudio();
        resolve();
      };

      mediaRecorder.value.stop();
      mediaRecorder.value.stream.getTracks().forEach((track) => track.stop());
    });
  };

  const transcribeAudio = async () => {
    if (audioChunks.value.length === 0) return;

    const audioBlob = new Blob(audioChunks.value, { type: "audio/webm" });
    const formData = new FormData();
    formData.append("audio", audioBlob);

    try {
      isTranscribing.value = true;
      const config = useRuntimeConfig();
      const audioBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(audioBlob);
      });

      const response = await useFetch('https://speech.googleapis.com/v1/speech:recognize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          config: {
            encoding: 'WEBM_OPUS',
            sampleRateHertz: 48000,
            languageCode: 'en-US',
          },
          audio: {
            content: audioBase64
          }
        }),
        query: {
          key: config.public.googleCloudApiKey
        }
      });

      if (response.error.value) throw response.error.value;

      const data = response.data.value;
      if (data?.results?.[0]?.alternatives?.[0]?.transcript) {
        transcribedText.value = data.results[0].alternatives[0].transcript;
      } else {
        throw new Error('No transcription results found');
      }
    } catch (error) {
      console.error("Error transcribing audio:", error);
      transcribedText.value = "";
    } finally {
      isTranscribing.value = false;
    }
  };

  return {
    isRecording,
    isTranscribing,
    transcribedText,
    startRecording,
    stopRecording,
  };
}