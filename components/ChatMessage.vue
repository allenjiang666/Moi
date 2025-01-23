<template>
    <div class="flex items-center" :class="speaker === 'A' ? 'justify-start' : 'justify-end'">
        <div class="flex items-center space-x-4 max-w-[80%]"
            :class="speaker === 'A' ? 'flex-row' : 'flex-row-reverse space-x-reverse'">
            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                :class="speaker === 'A' ? 'bg-primary text-white' : 'bg-secondary text-white'">
                {{ speaker === 'A' ? '👩' : '👨' }}
            </div>
            <div class="flex-grow p-3 rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors group relative"
                :class="{
        'bg-primary/5 shadow-sm': speaker === 'A',
        'bg-secondary/5 shadow-sm': speaker === 'B' && (!transcribedText || !isPracticeModeActive),
        'bg-green-100 shadow-sm': speaker === 'B' && isPracticeModeActive && transcribedText && isMatch,
        'bg-red-100 shadow-sm': speaker === 'B' && isPracticeModeActive && transcribedText && !isMatch
    }" @click="handleClick">
                <p class="text-gray-900" v-if="!isPracticeModeActive || speaker === 'A'">{{ text }}</p>
                <div v-if="!isPracticeModeActive"
                    class="absolute left-0 right-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1 text-center mx-4">
                    {{ translation }}
                </div>
                <div v-if="isPracticeModeActive && speaker !== 'A'" class="flex items-center space-x-3">
                    <div class="flex-grow">
                        <div v-if="isTranscribing" class="text-sm text-gray-500">Transcribing...</div>
                        <div v-else-if="transcribedText" class="text-sm text-gray-700 relative flex items-center gap-2">
                            <div class="flex-shrink-0" v-if="isPracticeModeActive">
                                <Icon v-if="isMatch" name="material-symbols:check-circle"
                                    class="w-5 h-5 text-green-500" />
                                <Icon v-else name="material-symbols:cancel" class="w-5 h-5 text-red-500" />
                            </div>
                            <div class="flex-grow">{{ transcribedText }}</div>
                        </div>
                        <div v-else class="text-sm text-gray-400">Click and hold to record</div>
                    </div>
                    <button @mousedown="startRecording" @mouseup="stopRecording" @mouseleave="stopRecording"
                        @touchstart.prevent="startRecording" @touchend.prevent="stopRecording"
                        class="p-2 rounded-full hover:bg-blue-100 transition-colors flex-shrink-0"
                        :class="{ 'bg-red-100': isRecording }">
                        <Icon :name="isRecording ? 'material-symbols:mic' : 'material-symbols:mic-outline'"
                            class="w-6 h-6" :class="{ 'text-red-500': isRecording, 'text-secondary': !isRecording }" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useVoiceRecorder } from '@/composables/useVoiceRecorder'
import { computed, watch } from 'vue'

const props = defineProps({
    speaker: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    isPracticeModeActive: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['speak'])

const isMatch = computed(() => {
    if (!transcribedText.value || !props.text) return false;
    const stripPunctuation = (text) => text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g, '').trim();
    return stripPunctuation(transcribedText.value) === stripPunctuation(props.text);
});

const {
    isRecording,
    isTranscribing,
    transcribedText,
    startRecording,
    stopRecording
} = useVoiceRecorder()

watch(() => props.isPracticeModeActive, (newValue) => {
    if (!newValue) {
        transcribedText.value = ''
    }
})

const handleClick = () => {
    if (!props.isPracticeModeActive || props.speaker === 'A') {
        emit('speak', props.text, props.speaker)
    }
}
</script>