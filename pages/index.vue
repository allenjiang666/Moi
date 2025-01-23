<template>
    <div class="min-h-screen bg-gray-100 flex">
        <Sidebar :dialogues="dialogues" :selected-dialogue-id="selectedDialogue?.id" @select="selectDialogue" />
        <DialogueView :dialogue="selectedDialogue" :is-practice-mode-active="isPracticeModeActive"
            :current-message-index="currentMessageIndex" @speak="speakText" @toggle-practice="togglePracticeMode" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dialoguesData from '@/assets/dialogues.json'
import Sidebar from '@/components/Sidebar.vue'
import DialogueView from '@/components/DialogueView.vue'

const dialogues = ref([])
const selectedDialogue = ref(null)
const isPracticeModeActive = ref(false)
const currentMessageIndex = ref(0)

onMounted(() => {
    dialogues.value = dialoguesData.dialogues
    // Select the first dialogue by default
    if (dialogues.value.length > 0) {
        selectDialogue(dialogues.value[0])
    }
})

const selectDialogue = (dialogue) => {
    selectedDialogue.value = dialogue
    isPracticeModeActive.value = false
    currentMessageIndex.value = 0
}

const togglePracticeMode = () => {
    isPracticeModeActive.value = !isPracticeModeActive.value
    currentMessageIndex.value = 0
}

const speakText = (text, speaker) => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel()

    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US' // Set language to English
    utterance.rate = 0.5 // Slightly slower rate for better clarity
    utterance.pitch = speaker === 'A' ? 1.2 : 0.8 // Higher pitch for A, lower for B

    // Get available voices and set the appropriate voice
    const voices = window.speechSynthesis.getVoices()
    const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Samantha'))
    const maleVoice = voices.find(voice => voice.name.includes('Male') || voice.name.includes('Daniel'))

    utterance.voice = speaker === 'A' ? femaleVoice || null : maleVoice || null

    // Speak the text
    window.speechSynthesis.speak(utterance)
}
</script>