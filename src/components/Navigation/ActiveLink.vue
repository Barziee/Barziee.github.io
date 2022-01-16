<template>
  <transition name="fade">
    <a
      v-if="show"
      class="border-theme2 pl-1 my-px active-link"
      :href="href"
      @click="navigate"
      ><div class="text-theme1 text-xl">{{ text }}</div></a
    >
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useOnShow from "@/composition/OnShow";

export default defineComponent({
  name: "ActiveLink",
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    navigate: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      show: useOnShow(),
    };
  },
});
</script>

<style lang="scss" scoped>
.active-link {
  border-radius: 0.125rem;
  border-left-width: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  border-style: ridge;
  border-radius: 1rem;
  border-left-width: 2px;
}
</style>
