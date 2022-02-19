<template>
  <BaseSection title="About Me">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <div class="col-span-7 col-start-1 flex flex-col">
          <p class="text-opacity-95 text-theme1 text-2xl">
            I'm Bar, an aspiring game developer.
          </p>
          <p class="text-opacity-95 text-theme1 text-2xl">
            A team player with great communication skills looking to thrive in a creative environment.
          </p>
          <p class="text-opacity-95 text-theme1 text-2xl mt-3">
            Currently working towards a degree in game design by Tiltan School
            of Design.
          </p>
          <p class="text-opacity-95 text-theme1 text-2xl mt-3">
            Keen to learn new skills and motivated to create fun games.
          </p>
          <div class="mt-6 text-2xl">
            <a
              class="text-theme1 underline opacity-80"
              :href="`${publicPath}assets/static/CV_BarRonen.pdf`"
              download="CV_BarRonen.pdf"
              ><font-awesome-icon
                class="text-white mr-2"
                :icon="['fas', 'file-pdf']"
              />RESUME</a
            >
          </div>
        </div>
        <img
          class="image my-auto col-start-9 col-span-3"
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
  setup() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
});
</script>

<style lang="scss" scoped>
.image {
  display: block;
  height: 100%;
}
</style>
