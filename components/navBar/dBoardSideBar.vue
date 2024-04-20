<template>

  <header class="w-full lg:hidden py-2 px-4 shadow-full items-center">
    <div class="flex gap-4 justify-between items-center">
      <div class="flex justify-between w-full items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle Button -->
        <img src="/flexiflow.png" alt="FlexiFlow" class="object-cover mt-3 mb-2 w-40" />
        <button @click="toggleSidebar" :aria-controls="sidebar"
          class=" block rounded-md  cursor-pointer text-white bg-pink  p-1 shadow-sm  lg:hidden">
          <svg class="h-8 w-8 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <!-- Hamburger Toggle Button -->
      </div>

      <!-- <profile /> -->
    </div>
  </header>

  <!-- Dark Background Transition -->
  <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
    leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
    <div @keydown.esc="props.setSidebarOpen(!props.sidebarOpen)" v-show="props.sidebarOpen"
      class="z-10 fixed inset-0 block lg:hidden transition-opacity">
      <div @click="props.setSidebarOpen(!props.sidebarOpen)" class="absolute inset-0 bg-[#000] opacity-70" tabindex="0">
      </div>
    </div>
  </transition>

  <!-- Drawer Menu -->
  <aside :ref="sidebar"
    class=" left-0 lg:px-32 shadow bg-[#242424] fixed lg:bg-[#fff] py-5 top-0 h-screen overflow-y-hidden z-50 lg:h-fit w-64 lg:w-full   duration-300 ease-linear shadow-full lg:static lg:translate-x-0"
    :class="props.sidebarOpen ? 'translate-x-0' : '-translate-x-full'">

    <!-- Mobile toggle -->

    <button :ref="trigger" @click="props.setSidebarOpen(!props.sidebarOpen)" :aria-expanded="props.sidebarOpen"
      :aria-controls="sidebar" class="block text-white bg-green lg:hidden">
      <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <div class="flex items-center justify-between gap-2 ">
      <div class="flex flex-col lg:flex-row w-full gap-5 justify-between items-center ">
        <img src="/flexiflow.png" alt="FlexiFlow" class="object-cover mt-3 mb-2 hidden lg:flex w-40" />

        <span class="flex flex-col lg:flex-row items-center gap-5">
          <side-bar-item :setSidebarOpen="setSidebarOpen"></side-bar-item>
        </span>

        <div class="flex flex-col lg:flex-row  items-center gap-5">
          <span class="font-bold cursor-pointer text-[#fff] lg:text-[#000] text-base">Log in</span>
          <div>
          <v-button size="small" class="rounded-full" type="pry">Get Started</v-button>

          </div>
        </div>
      </div>


    </div>


    <!-- <profile /> -->

    <!-- <nav class="no-scrollbar flex  justify-center overflow-y-auto items-center mt-5 space-y-10 md:space-y-28">
      <ul class="font-sans">
        <li></li>
      </ul>

      <div class="flex gap-2 mb-10 text-red cursor-pointer" @click="handleLogout">
        <span>Logout</span>
      </div>
    </nav> -->
  </aside>

</template>

<script setup>
import VButton from '../UI/v-button.vue'
import SideBarItem from "../side-bar-item.vue";
import { useRouter } from "vue-router";
import { watch, onMounted, ref } from "vue";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const trigger = ref(null);
const sidebar = ref(null);

onMounted(async () => {
  await nextTick();


  gsap.from(sidebar.value, {
    scrollTrigger: {
      trigger: sidebar.value,
      start: "left 100%",
      end: "left center",
      toggleActions: "restart pause resume pause",
    },
    duration: 1,
    x: -300,
    autoAlpha: 0,
    ease: "back.out(1.7)"
  });


});

const props = defineProps({
  sidebarOpen: {
    type: [Boolean, String],
    default: undefined
  },
  setSidebarOpen: Function
});

const toggleSidebar = () => {
  props.setSidebarOpen(!props.sidebarOpen);
}

const sidebarExpanded = ref(localStorage.getItem('sidebar-expanded') === 'true');

// Function to toggle sidebar state
const setSidebarExpanded = (value) => {
  sidebarExpanded.value = value;
  localStorage.setItem('sidebar-expanded', value.toString());
  document.body.classList.toggle('sidebar-expanded', value);
};

// Watch for sidebarExpanded changes and update localStorage + body class
watch(sidebarExpanded, (newValue) => {
  localStorage.setItem('sidebar-expanded', newValue.toString());
  document.body.classList.toggle('sidebar-expanded', newValue);
}, { immediate: true });

// Setup event listeners for clicking outside and pressing ESC
onMounted(() => {
  const clickHandler = (event) => {
    // Assuming refs for sidebar and trigger elements are setup
    // Example: const sidebar = ref(null);
    if (!props.sidebarOpen || sidebar.value?.contains(event.target) || trigger.value?.contains(event.target)) return;
    setSidebarExpanded(false);
  };

  const keyHandler = (event) => {
    if (!props.sidebarOpen || event.keyCode !== 27) return;
    setSidebarExpanded(false);
  };

  document.addEventListener('click', clickHandler);
  document.addEventListener('keydown', keyHandler);

  // Cleanup event listeners on component unmount
  onUnmounted(() => {
    document.removeEventListener('click', clickHandler);
    document.removeEventListener('keydown', keyHandler);
  });
});


const router = useRouter();

//Log out
async function handleLogout() {
  // loading.value = true;
  try {
    // Clear session storage
    window.sessionStorage.clear();

    // Clear local storage
    window.localStorage.clear();

    // Navigate to index page
    router.push("/");
  } catch (error) {}
}
</script>
