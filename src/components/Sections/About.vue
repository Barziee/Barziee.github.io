<template>
  <BaseSection title="About Me">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <div class="col-span-6 col-start-1 flex flex-col">
          <p class="text-opacity-95 text-theme1">
            I'm Bar, a team-oriented Unity developer. I love crafting
            experiences, I mostly focus on product, design and tech art for
            games. Currently working towards a degree in game design by Tiltan
            School of Design. Keen to learn new skills and motivated to create
            fun games.
          </p>
          <div class="mt-6">
            <a
              class="text-theme1 underline opacity-80"
              :href="`${publicPath}assets/static/CV_BarRonen.pdf`"
              download="CV_BarRonen.pdf"
              ><font-awesome-icon
                class="text-white mr-1"
                :icon="['fas', 'file-pdf']"
              />RESUME</a
            >
          </div>
        </div>
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
