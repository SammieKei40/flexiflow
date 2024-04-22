<template>


    <div class="flex flex-col flex-1 overflow-hidden ">

        <d-board-side-bar :sidebarOpen="sidebarOpen" :setSidebarOpen="setSidebarOpen" class=""></d-board-side-bar>

        <!-- <db-content> -->


        <div
            class="flex-1    overflow-hidden md:overflow-x-hidden  md:min-h-0    ">
            <slot></slot>
        </div>

        <Footer />
    </div>
    <!-- </db-content> -->
    <scrollup />

</template>

<script setup>
import Scrollup from '../components/UI/scrollup.vue'
import Header from "../components/header.vue";
import DBoardSideBar from "../components/navBar/dBoardSideBar.vue";
import Footer from "../components/footer";



const sidebarOpen = ref(false);
const setSidebarOpen = (open) => sidebarOpen.value = open;


</script>

<style scoped>
/* Add any additional styling here */
</style>
