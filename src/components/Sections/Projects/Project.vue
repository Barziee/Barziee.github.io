<template>
  <img class="m-auto media h-full" :src="src" :alt="alt" />
  <img class="m-auto media" :src="src" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.media {
  transition: filter 0.5s, transform 0.5s;
}
.media:hover {
  filter: brightness(120%);
  transform: scale(1.1);
}
</style>
