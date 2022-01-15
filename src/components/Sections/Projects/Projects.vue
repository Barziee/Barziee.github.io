<template>
  <BaseSection title="Projects">
    <template v-slot:section-body>
      <div class="grid grid-cols-4 gap-4 justify-items-start">
        <Project
          v-for="(project, index) in projectList"
          :key="index"
          :src="project.src"
          :alt="project.alt"
        />
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent, readonly } from "vue";
import BaseSection from "@/components/Sections/BaseSection.vue";
import Project from "./Project.vue";
import projectList from "./projectsList";

export default defineComponent({
  name: "Projects",
  components: {
    BaseSection,
    Project,
  },
  setup() {
    return {
      projectList: readonly(projectList),
    };
  },
});
</script>
