<template>
  <BaseView>
    <template v-slot:view>
      <Projects />
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseView from "./BaseView.vue";
import Projects from "@/components/Sections/Projects/Projects.vue";

export default defineComponent({
  name: "PorjectsView",
  components: {
    BaseView,
    Projects,
  },
});
</script>
