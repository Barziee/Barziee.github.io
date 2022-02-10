<template>
  <BaseSection title="About Me">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <p class="text-opacity-95 text-theme1 col-span-6 col-start-1">
          I'm Bar, a team-oriented Unity developer. I love crafting experiences,
          I mostly focus on product, design and tech art for games. Currently
          working towards a degree in game design by Tiltan School of Design.
          Keen to learn new skills and motivated to create fun games.
        </p>
        <img
          class="image my-auto col-start-8 col-span-3"
          src="@/assets/images/profile_cartoon.png"
        />
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "./BaseSection.vue";

export default defineComponent({
  name: "About",
  components: {
    BaseSection,
  },
});
</script>

<style lang="scss" scoped>
.image {
  display: block;
  height: 100%;
}
</style>
