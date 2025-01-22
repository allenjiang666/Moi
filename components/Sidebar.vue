<template>
    <div class="w-1/4 bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <h1 class="text-2xl font-bold text-primary mb-6">Moi</h1>
        <div class="space-y-2">
            <button v-for="dialogue in dialogues" :key="dialogue.id" @click="$emit('select', dialogue)"
                class="w-full text-left p-3 rounded-lg transition-colors duration-200 ease-in-out" :class="{
                'bg-primary/10 text-primary': selectedDialogueId === dialogue.id,
                'hover:bg-gray-100': selectedDialogueId !== dialogue.id
            }">
                <h2 class="text-sm font-medium">{{ dialogue.title }}</h2>
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    dialogues: {
        type: Array,
        required: true
    },
    selectedDialogueId: {
        type: Number,
        default: null
    }
})

defineEmits(['select'])
</script>