<template>
  <transition name="fade">
    <div v-if="show">
      <slot name="view"></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useOnShow from "@/composition/OnShow";

export default defineComponent({
  name: "BaseView",
  setup() {
    return {
      show: useOnShow(),
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
