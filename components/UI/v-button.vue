<template>
  <button
    :class="buttonClass"
    :style="{ whiteSpace: 'nowrap' }"
    :disabled="disabled || loading"
  >
    <component
      v-if="icon || loading"
      :class="iconOrLoadingClass"
      :size="17"
      :color="types[type].text"
      :is="loading ? Spinner : icon"
    ></component>
    <span :class="textClass">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Spinner from "../../assets/svgs/loader-icon.vue";

interface ButtonProps {
  size: string;
  type: string;
  round: boolean;
  icon: object;
  iconOnly: boolean;
  full: boolean;
  disabled: boolean;
  loading: boolean;
}

export default {
  components: {
    Spinner,
  },
  props: {
    size: {
      type: String,
      default: "medium",
    },
    type: {
      type: String,
      default: "pry",
    },
    round: Boolean,
    icon: Object,
    iconOnly: Boolean,
    full: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  setup(props: ButtonProps) {
    const types = {
      sec: {
        __class: "border-pry rounded mt-10 bg-green text-[#fff] font-bold btn-pry",
        text: "#fff",
      },
      pry: {
        __class: " rounded-full hover:bg-[#000] hover:duration-300 hover:ease-linear border bg-pink text-[#fff]  font-bold ",
        text: "#fff",
      },
      delete: {
        __class: "text-white bg-red-600 hover:bg-red-700 rounded-lg",
        text: "#fff",
      },
    };

    const sizes = {
      small: "py-3 px-6",
      medium: "py-4 px-8",
      big: "py-4 px-8 txt-s-4",
    };

    const buttonClass = computed(() => {
      let baseClass =
        (types[props.type]?.__class || types["pry"].__class) +
        " " +
        (sizes[props.size] || sizes["medium"]);

      if (props.round) baseClass += " rounded-full h-12 w-12 max-w-12 center";
      else baseClass += " rounded-xl";

      if (props.full) baseClass += " w-full";
      if (props.disabled || props.loading) baseClass += " fade-40 cursor-not-allowed";

      return baseClass;
    });

    const iconOrLoadingClass = computed(() => {
      return `${!props.iconOnly ? "mr-2" : ""} my-auto`;
    });

    const textClass = computed(() => {
      return `${
        !props.icon && !props.loading ? (props.round ? "mt-1 ml-1 z-50" : "m-auto") : ""
      } my-auto`;
    });

    return {
      buttonClass,
      iconOrLoadingClass,
      textClass,
      types,
      Spinner,
    };
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
.disabled-button {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
