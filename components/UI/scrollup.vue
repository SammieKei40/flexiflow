<template>
    <button v-if="isVisible" @click="scrollToTop"
        class="fixed bottom-5 right-5 p-2 rounded-full bg-pink text-[#fff] cursor-pointer">
        <!-- <ArrowCircleUpIcon class="h-5 w-5" /> -->
        <i class="fas fa-arrow-up" ></i>
    </button>
</template>

<script setup lang="ts">
// import { ArrowCircleUpIcon } from '@heroicons/vue/24/solid';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.pageYOffset > 100;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Additional styling if needed */
</style>
