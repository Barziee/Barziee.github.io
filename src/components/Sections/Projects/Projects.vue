<template>
  <BaseSection title="Games">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <p class="text-theme1 mb-8 col-span-10">
          Here are some of the games I've created.
        </p>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-start-1 col-span-10 grid grid-cols-3 gap-y-4 gap-x-8 grid-rows-2 justify-items-start"
        >
          <Project
            v-for="(project, index) in projectList"
            :key="index"
            :projectObj="project"
          />
        </div>
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
