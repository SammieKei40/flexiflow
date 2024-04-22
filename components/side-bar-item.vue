<template>
  <nuxt-link v-for="(item, index) in displayedItems" :key="index" :to="item.link"
    @click="setActive(index), setSidebarOpen()" class=" flex justify-between items-center cursor-pointer rounded-md"
    :exact="true" :active-class="activeIndex === index ? '' : ''">
    <div :class="[
    `flex items-center justify-start underline-animation text-[#fff] lg:text-gray font-normal w-full  mx-auto gap-2 rounded `,
    ]">
      <h2 class="ml-2 lg:inline-block truncate">{{ item.text }}</h2>
    </div>

  </nuxt-link>

</template>

<script>
import { defineComponent, ref, onMounted } from "@vue/composition-api";

// import store from "../store";



export default defineComponent({
  props: {
    setSidebarOpen: Function
  },
  setup() {

    const activeIndex = ref(parseInt(localStorage.getItem("activeIndex")) || 0);
    const route = useRoute();
  

    const allItems = [
      { text: "Product", link: "#"},
      { text: "Pricing", link: "#" },
      { text: "Company", link: "#" },
      { text: "Resources", link: "#" },
      { text: "Contact", link: "#" },
    ];
  
    onMounted(() => {
      const storedIndex = localStorage.getItem("activeIndex");
      if (storedIndex) {
        activeIndex.value = parseInt(storedIndex);
      }
    });

    const displayedItems = ref([]);

    function setActive(index) {
      activeIndex.value = index;
      localStorage.setItem("activeIndex", index);

      // Emit a custom event to inform other components about the active page
      const event = new CustomEvent("active-page-changed", {
        detail: displayedItems.value[index].text,
      });
      window.dispatchEvent(event);
    }

   
    onMounted(() => {
      displayedItems.value = allItems;

      setActive(activeIndex.value);
    });

    return {
      activeIndex,
      displayedItems,
      setActive,
    };
  },
});
</script>

<style scoped>
.underline-animation {
  position: relative;
  cursor: pointer;
  display: inline-block;
}

.underline-animation::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #000;
  transition: width 0.3s ease;
}

.underline-animation:hover {
  color: #493797;
}

.underline-animation:hover::after {
  width: 100%;
}
</style>
