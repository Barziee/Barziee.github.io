<template>
  <router-link :to="to" v-slot="{ href, navigate, isActive }" custom>
    <ActiveLink
      v-if="isActive"
      :href="href"
      :text="text"
      :navigate="navigate"
    />
    <InActiveLink v-else :href="href" :text="text" :navigate="navigate" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActiveLink from "./ActiveLink.vue";
import InActiveLink from "./InActiveLink.vue";

export default defineComponent({
  name: "Link",
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  components: {
    ActiveLink,
    InActiveLink,
  },
});
</script>
