<template>
  <BaseView>
    <template v-slot:view>
      <About />
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseView from "./BaseView.vue";
import About from "@/components/Sections/About.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    BaseView,
    About,
  },
});
</script>
