<template>
  <div class="bg-theme3 grid grid-cols-5 grid-rows-4 h-screen">
    <Navigation />
    <router-view class="col-span-3 row-span-4 grid grid-rows-12 grid-cols-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Navigation/Navigation.vue";

export default defineComponent({
  components: {
    Navigation,
  },
});
</script>

<style lang="scss">
p {
  line-height: 1.8em;
}
</style>
