<template>
  <a class="text-theme2 pl-2 my-px text-xl" :href="href" @click="navigate">{{
    text
  }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InActiveLink",
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
});
</script>
