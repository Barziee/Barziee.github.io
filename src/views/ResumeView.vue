<template>
  <div>
    <Resume />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Resume from "@/components/Sections/Resume.vue";

export default defineComponent({
  name: "ResumeView",
  components: {
    Resume,
  },
});
</script>
