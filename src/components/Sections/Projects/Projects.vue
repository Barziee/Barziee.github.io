<template>
  <BaseSection title="Projects">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <p class="text-theme1 mb-8 col-span-10">
          His palms spaghetti, knees weak, arms spaghetti There's vomit on his
          sweater spaghetti, mom's spaghetti He's nervous, but on the surface he
          looks calm spaghetti to drop bombs, But he keeps on spaghetti what he
          wrote down, The whole crowd goes spaghetti He opens his mouth, but
          spaghetti won't come out He's choking how, everybody's joking now
          spaghetti run out, time's up, over, bloah! Snap back to spaghetti, Oh
          there goes spaghetti Oh, there goes spaghetti, bloah
        </p>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-start-1 col-span-10 grid grid-cols-3 gap-4 grid-rows-2 justify-items-start"
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
