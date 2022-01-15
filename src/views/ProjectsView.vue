<template>
  <div>
    <Projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Projects from "@/components/Sections/Projects/Projects.vue";

export default defineComponent({
  name: "PorjectsView",
  components: {
    Projects,
  },
});
</script>
