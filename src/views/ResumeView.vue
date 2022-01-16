<template>
  <BaseView>
    <template v-slot:view>
      <Resume />
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseView from "./BaseView.vue";
import Resume from "@/components/Sections/Resume.vue";

export default defineComponent({
  name: "ResumeView",
  components: {
    BaseView,
    Resume,
  },
});
</script>
