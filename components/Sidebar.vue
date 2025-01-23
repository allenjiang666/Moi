<template>
    <div class="fixed left-0 top-0 h-full z-50">
        <button @click="toggleSidebar"
            class="fixed right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 z-[100] bg-white shadow-md">
            <Icon :name="isCollapsed ? 'material-symbols:menu' : 'material-symbols:close'" class="h-6 w-6" />
        </button>
        <div :class="[
            'bg-white border-r border-gray-200 h-full overflow-y-auto transition-all duration-300 ease-in-out',
            isCollapsed ? 'w-0 p-0' : 'w-[300px] p-4'
        ]">
            <div class="relative">
                <div class="relative mb-6 mt-16">
                    <h1 class="text-2xl font-bold text-primary transition-opacity duration-300 text-center"
                        :class="{ 'opacity-0': isCollapsed }">
                        Moi
                    </h1>
                </div>
            </div>
            <div class="space-y-2">
                <button v-for="dialogue in dialogues" :key="dialogue.id" @click="$emit('select', dialogue)"
                    class="text-left p-3 rounded-lg transition-all duration-200 ease-in-out" :class="{
            'bg-primary/10 text-primary': selectedDialogueId === dialogue.id,
            'hover:bg-gray-100': selectedDialogueId !== dialogue.id,
            'w-full': !isCollapsed,
            'w-8': isCollapsed
        }">
                    {{ dialogue.title }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    dialogues: {
        type: Array,
        required: true
    },
    selectedDialogueId: {
        type: Number,
        default: null
    }
});

const isCollapsed = ref(false);

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>
