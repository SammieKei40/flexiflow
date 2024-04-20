<template>
    <div class="">
        <Hero />
        <Features />
        <Testimonials />
        <Subscriptions />
        <Faq/>
    </div>
</template>

<script setup>
import Hero from '../components/home/hero.vue'
import Features from '../components/features/index.vue'
import Testimonials from '../components/testimonials/index.vue'
import Subscriptions from '../components/subscriptions/index.vue'
import Faq from '../components/faq/index.vue'


definePageMeta({
    layout: "default",
    // middleware: ["authenticated"],
});

</script>

<style lang="scss" scoped>

</style>