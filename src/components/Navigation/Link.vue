<template>
  <router-link :to="to" v-slot="{ href, navigate, isActive }" custom>
    <a
      v-if="isActive"
      class="border-l-4 border-theme6 rounded-sm pl-1 my-px"
      :href="href"
      @click="navigate"
      ><div class="text-theme7 animate-pulse">{{ text }}</div></a
    >
    <a v-else class="text-theme8 pl-2 my-px" :href="href" @click="navigate">{{
      text
    }}</a>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link",
  props: {
    text: {
      type: String,
    },
    to: {
      type: String,
    },
  },
});
</script>
