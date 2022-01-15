<template>
  <div class="bg-theme1 grid grid-cols-5 grid-rows-4 h-screen">
    <Navigation />
    <div class="bg-theme3 col-span-3 row-span-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation/Navigation.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
  },
});
</script>
