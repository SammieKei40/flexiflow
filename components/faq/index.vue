<template>
    <div class="bg-[#F4F4F2] mt-20">
        <div class="p-5 md:p-32 ">


            <div ref="testimonialRef" class="flex flex-col justify-start gap-5 items-start">
                <h1 class=" text-[#1F1F1F] text-start py-2 md:text-5xl text-3xl font-extrabold">
                    Frequently Ask Questions
                </h1>
                <p class="text-md  font-normal text-center text-gray">
                    Choose plan that works best for you, feel free to contact us
                </p>

            </div>


            <div class=" mt-5">

                <div ref="faqRef"  class="grid grid-cols-1  gap-4 md:grid-cols-2 p-">
                    <div v-for="(faq, faqIndex) in faqs" :key="faqIndex" class="py-4  rounded-xl bg-[#fff]">
                        <Disclosure>
                            <DisclosureButton class="flex justify-between w-full px-4 py-2  font-medium ">
                                <span class="text-[#061428]">{{ faq.question }}</span>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.5 3.83325C10.9603 3.83325 11.3334 4.20635 11.3334 4.66659V16.3333C11.3334 16.7935 10.9603 17.1666 10.5 17.1666C10.0398 17.1666 9.66669 16.7935 9.66669 16.3333V4.66659C9.66669 4.20635 10.0398 3.83325 10.5 3.83325Z"
                                        fill="#061428" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.83331 10.5001C3.83331 10.0398 4.20641 9.66675 4.66665 9.66675H16.3333C16.7936 9.66675 17.1666 10.0398 17.1666 10.5001C17.1666 10.9603 16.7936 11.3334 16.3333 11.3334H4.66665C4.20641 11.3334 3.83331 10.9603 3.83331 10.5001Z"
                                        fill="#061428" />
                                </svg>

                            </DisclosureButton>
                            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray">
                                {{ faq.answer }}
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const testimonialRef = ref(null);
const faqRef = ref(null);

const faqs = [
    {
        question: 'What is FlexFlow?',
        answer: 'FlexFlow is a flexible workflow solution for managing your projects and tasks efficiently.'
    },
    {
        question: 'How does FlexFlow integrate with other tools?',
        answer: 'FlexFlow provides seamless integration options with a variety of tools and platforms to ensure a unified workflow across your business operations.'
    },
    {
        question: 'Can I customize workflows in FlexFlow?',
        answer: 'Yes, FlexFlow allows for full customization of workflows, enabling you to tailor the process to meet the unique needs of your business.'
    },
    {
        question: 'Is FlexFlow suitable for small businesses?',
        answer: 'Absolutely, FlexFlow is designed to be scalable and can be just as effective for small businesses as it is for large enterprises.'
    },
    {
        question: 'Does FlexFlow offer customer support?',
        answer: 'Yes, FlexFlow provides comprehensive customer support including tutorials, live chat assistance, and a resource library.'
    },
    {
        question: 'How secure is FlexFlow with company data?',
        answer: 'FlexFlow takes data security seriously, employing robust encryption and compliance with leading security standards to protect your information.'
    },
    {
        question: 'What training is required to use FlexFlow?',
        answer: 'FlexFlow is user-friendly and requires minimal training, but we offer a range of training materials and sessions to help you make the most of the platform.'
    },
    {
        question: 'How does FlexFlow handle data backups?',
        answer: 'FlexFlow automatically backs up data at regular intervals, ensuring that your information is safe and can be easily restored if necessary.'
    },
    {
        question: 'Can FlexFlow be accessed on mobile devices?',
        answer: 'Yes, FlexFlow is accessible on mobile devices, providing you with the flexibility to manage your workflows on the go.'
    },
    {
        question: 'Does FlexFlow support collaboration between teams?',
        answer: 'Yes, FlexFlow is built with collaboration in mind, featuring tools that enable teams to work together effectively, no matter where they are.'
    },
    {
        question: "How does FlexFlow's pricing structure work?",
    answer: 'FlexFlow offers a tiered pricing structure to accommodate the needs of different organizations, with options ranging from a basic free plan to advanced enterprise solutions.'
  }
];


onMounted(async () => {
    await nextTick();


    // Enhanced animations triggered on scroll
    gsap.from(testimonialRef.value, {
        scrollTrigger: {
            trigger: testimonialRef.value,
            start: "top 100%",
            end: "bottom top",
            toggleActions: "restart pause resume pause",

        },
        duration: 1.5,
        x: -100,
        autoAlpha: 0
    });

    gsap.from(faqRef.value, {
        scrollTrigger: {
            trigger: faqRef.value,
            start: "top 100%",
            end: "bottom top",
            toggleActions: "restart pause resume pause",

        },
        duration: 1.5,
        y: 100,
        autoAlpha: 0
    });


  


});
</script>

<style scoped>

</style>