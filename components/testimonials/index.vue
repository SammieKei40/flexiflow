<template>
    <div class="bg-[#E0F1EE] mt-20">
        <div class="p-5 md:p-32 ">


            <div ref="testimonialRef" class="flex flex-col justify-center gap-5 items-center">
                <p class="bg-[#E7F8F1] p-1 rounded font-bold">Testimonials</p>
                <h1 class=" text-[#1F1F1F] text-center py-2 md:text-5xl text-3xl font-extrabold">
                    What Customers are saying
                </h1>
                <p class="text-md  font-normal text-center text-gray">
                    Take a deep dive into the heart of our SaaS solution, where advanced features await to transform the
                    way
                    you
                    manage and thrive.
                </p>

            </div>


            <div ref="testimonialCarouselRef" class="mt-10">
                <Swiper :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay]" :slidesPerView="1"
                    :pagination="true" :draggable="true" :spaceBetween="30" :effect="'creative'" :loop="true"
                    :creative-effect="{
                        prev: {
                            shadow: false,
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }" :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }" navigation class="mySwiper">
                    <SwiperSlide v-for="review in reviews" :key="review">
                        <div class="bg-[#fff] h-full flex flex-col p-6 rounded-lg">
                            <div class="flex justify-start space-x-1">
                                <!-- Display stars dynamically -->
                                <span v-for="star in review.stars" :key="star" class="text-[#FFC728] text-2xl">★</span>
                            </div>
                            <p class="text-gray text-lg mt-4">
                                {{ review.text }}
                            </p>
                            <div class="flex items-center mt-4">
                                <img class="rounded-full w-10 h-10 mr-3" :src="review.imageUrl" :alt="review.name">
                                <div>
                                    <div class="font-semibold text-gray">{{ review.name }}</div>
                                    <div class="text-gray text-sm">{{ review.title }}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const reviews = ref([
    {
        stars: 5,
        text: "Understanding market trends is crucial in real estate. FlexFlow provides powerful analytics tools that has brought substantial growth.",
        imageUrl: "/ladysmiling.png",
        name: "David K",
        title: "Real Estate Investor"
    },
    {
        stars: 4,
        text: "FlexFlow has been a game-changer for my portfolio. Their insights are unmatched.",
        imageUrl: "/ladysmiling.png",
        name: "Maria L",
        title: "Commercial Developer"
    },
    {
        stars: 5,
        text: "As a property manager, FlexFlow's tools have saved me countless hours.",
        imageUrl: "/ladysmiling.png",
        name: "Steve J",
        title: "Property Manager"
    },
    {
        stars: 5,
        text: "Their market analysis is incredibly detailed yet easy to understand. Highly recommended.",
        imageUrl: "/ladysmiling.png",
        name: "Susan Q",
        title: "Investment Advisor"
    }
]);


gsap.registerPlugin(ScrollTrigger);

const testimonialRef = ref(null);
const testimonialCarouselRef = ref(null);

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
        y: -100,
        autoAlpha: 0
    });

    gsap.from(testimonialCarouselRef.value, {
        scrollTrigger: {
            trigger: testimonialCarouselRef.value,
            start: "top 100%",
            end: "bottom",
            toggleActions: "restart pause resume pause",
        },
        duration: 1,
        x: 100,
        autoAlpha: 0,
        // ease: "power4.inOut"
    });

 


});


</script>

<style scoped>
.mySwiper {
    width: 100%;
    height: 300px;
}

.carousel-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: #eee;
}
</style>