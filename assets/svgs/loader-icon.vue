<template>
  <span
    class="inline-block"
    :style="`height: ${size}px; width: ${size}px; max-width: ${size}px`"
  >
    <loading :style="`color: ${color}`" />
  </span>
</template>

<script setup>
import Loading from "./loading.vue";
// interface Props{
//   color: string,
//   size: number
// }
let props = defineProps({
  color: {
    type: String,
    default: "#fff",
  },
  size: {
    type: Number,
    default: 20,
  },
});
</script>

<style>
/* .path {
  stroke: #491EC4!important;
} */

@keyframes Circular-_-rotate {
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
@keyframes Circular-_-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
