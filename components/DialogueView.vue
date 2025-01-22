<template>
    <div class="flex-1 p-8 overflow-y-auto relative">
        <div v-if="dialogue" class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ dialogue.title }}</h2>

            <div class="space-y-6">
                <ChatMessage v-for="(message, index) in dialogue.conversation" :key="index" :speaker="message.speaker"
                    :text="message.text" :translation="message.translation"
                    :is-practice-mode-active="isPracticeModeActive"
                    @speak="$emit('speak', message.text, message.speaker)" />
            </div>

            <div class="fixed bottom-8 right-8">
                <button @click="$emit('togglePractice')"
                    class="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                    {{ isPracticeModeActive ? 'Exit Practice' : 'Start Practice' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue'

defineProps({
    dialogue: {
        type: Object,
        default: null
    },
    isPracticeModeActive: {
        type: Boolean,
        default: false
    },
    currentMessageIndex: {
        type: Number,
        default: 0
    }
})

defineEmits(['speak', 'togglePractice'])
</script>