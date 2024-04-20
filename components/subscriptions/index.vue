<template>
    <div class="px-2 md:px-32 md:py-5 mt-20">


        <div ref="subscriptionRef" class="flex flex-col justify-center gap-5 items-center">
            <p class="bg-[#E7F8F1] p-1 rounded font-bold">Subscriptions</p>
            <h1 class=" text-[#1F1F1F] text-center py-2 md:text-5xl text-3xl font-extrabold">
                Choose Plan That's Right For You
            </h1>
            <p class="text-md  font-normal text-center text-gray">
                Choose plan that works best for you, feel free to contact us
            </p>


        </div>


        <div class="flex flex-col items-center justify-center py-8 space-y-20">
            <!-- Subscription section -->
            <div class="text-center">
                <div class="inline-flex rounded-md   shadow-sm" role="group">
                    <button class="bg-[#fff] w-40 shadow  rounded-lg px-4 py-4"
                        :class="{ 'font-semibold bg-pink text-[#fff]': billingPeriod === 'monthly' }"
                        @click="setBillingPeriod('monthly')">Bill Monthly</button>
                    <button class="bg-[#fff] w-40 shadow rounded-lg px-4 py-4"
                        :class="{ 'font-semibold bg-pink text-[#fff]': billingPeriod === 'yearly' }"
                        @click="setBillingPeriod('yearly')">Bill
                        Yearly</button>
                </div>
            </div>

            <!-- Plans -->
            <div ref="subscriptionPlansRef" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                <!-- Dynamic Plan Cards -->
                <div v-for="plan in plans" :key="plan.title"
                    class="w-auto flex flex-col items-center  rounded-xl shadow-lg p-5 gap-6 transform transition-all"
                    :class="{ 'bg-pink text-[#fff] special-highlight': plan.highlight }">
                    <h2 class="font-semibold text-3xl ">{{ plan.title }}</h2>

                    <p class="text-md  text-center w-[251px]"
                        :class="plan.highlight === false ? 'text-gray' : 'text-[#fff]'">{{
                        plan.description
                        }}</p>
                    
                    <p class="text-4xl font-bold">{{ billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceYearly
                        }}</p>

                    <div class="bg-[#56469C] shadow-xl p-2 text-[##fff] rounded-xl"
                        :class="plan.highlight === false ? 'hidden' : ''">
                        Save $50 a year

                    </div>
                    <div class="border p-10 flex flex-col items-center justify-center rounded-lg"
                        :class="plan.highlight === false ? 'bg-[#F9FAFB] border-[#F9FAFB]' : 'bg-[#fff] text-[#000]'">

                        <ul class="  whitespace-nowrap">
                            <li v-for="(feature, index) in plan.features" :key="index" class="flex gap-3 mb-4 text-lg">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z"
                                        fill="#8573D4" />
                                </svg>
                                {{ feature }}
                            </li>
                        </ul>

                        <button class="mt-10 w-full font-bold py-4 px-4 rounded-2xl shadow-lg"
                            :class="plan.highlight === true ? 'bg-pink text-[#fff]' : 'bg-[#fff] text-[#000]'"
                            @click="subscribe(plan.title)">{{ plan.buttonText }}</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const billingPeriod = ref('monthly')

const plans = ref([
    {
        title: 'Free',
        description: 'Have a go and test your superpowers',
        priceMonthly: '$0/mo',
        priceYearly: '$0/yr',
        features: ['2 Users', '2 Files', 'Public Share & Comments', 'Chat Support', 'New income apps'],
        highlight: false,
        buttonText: 'Signup for Free'
    },
    {
        title: 'Pro',
        description: 'Experiment the power of infinite possibilities',
        priceMonthly: '$8/mo',
        priceYearly: '$80/yr',
        features: ['4 Users', 'All apps', 'Unlimited exports', 'Folders & collaboration', 'All incoming apps'],
        highlight: true,
        buttonText: 'Goto Pro'
    },
    {
        title: 'Business',
        description: 'Unveil new superpowers and join the Design League',
        priceMonthly: '$16/mo',
        priceYearly: '$160/yr',
        features: ['All features of Pro plan', 'Account Success Manager', 'SSO', 'Co-conception program', 'Collaboration-Soon'],
        highlight: false,
        buttonText: 'Goto Business'
    }
])

gsap.registerPlugin(ScrollTrigger);

const subscriptionRef = ref(null)
const subscriptionPlansRef = ref(null)
const setBillingPeriod = (period) => {
    billingPeriod.value = period
}

const subscribe = (planTitle) => {
    alert(`Subscribing to ${planTitle}...`)
    // Here you would implement the actual subscription logic,
    // possibly calling an API or transitioning to a payment page.
}

onMounted(async () => {
    await nextTick();


    // Enhanced animations triggered on scroll
    gsap.from(subscriptionRef.value, {
        scrollTrigger: {
            trigger: subscriptionRef.value,
            start: "top 100%",
            end: "bottom top",
            toggleActions: "restart pause resume pause",

        },
        duration: 1.5,
        x: -100,
        autoAlpha: 0
    });

    gsap.from(subscriptionPlansRef.value, {
        scrollTrigger: {
            trigger: subscriptionPlansRef.value,
            start: "top 100%",
            end: "bottom ",
            toggleActions: "restart pause resume pause",
        },
        duration: 1.5,
        x: 100,
        autoAlpha: 0,
        // ease: "power4.inOut"
    });



});
</script>

<style scoped>
.special-highlight:before {
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    width: calc(100% + 1rem);
    /* Width of the element plus some extra space */
    height: calc(100% + 2rem);
    /* Height of the element plus some extra space */
    background-image: linear-gradient(to bottom, #56469C 20%, #665A9C 20%);
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 1rem ;
}
</style>