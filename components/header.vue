<template>
  <header class="w-full  py-2 px-4 bg-red-500 shadow-full items-center">
    <div class="flex gap-4 justify-between items-center">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle Button -->
        <button @click="toggleSidebar" :aria-controls="sidebar"
          class=" block rounded-md  cursor-pointer text-white bg-green  p-1 shadow-sm  lg:hidden">
          <svg class="h-8 w-8 fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <!-- Hamburger Toggle Button -->
      </div>
      <div class="text-lg hidden md:block">
        <span class="text-green font-bold"></span><span class="text-gray">{{ formattedDate }}</span>
      </div>
      <!-- <profile /> -->
    </div>
  </header>
</template>

<script setup>
// import Profile from "./UI/profile.vue";



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
</script>

<style lang="scss" scoped></style>
