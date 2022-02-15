<template>
  <div
    class="text-theme1 text-3xl underline font-bold col-start-2 row-start-3 col-span-6 ml-12"
  >
    {{ title }}
  </div>
  <div class="col-start-2 row-start-4 col-span-6 ml-12">
    <slot name="section-body"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseSection",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.underline {
  text-underline-offset: 0.21em;
}
</style>
