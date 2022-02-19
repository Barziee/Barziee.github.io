<template>
  <BaseSection title="Contact">
    <template v-slot:section-body>
      <div class="flex flex-col">
        <p class="text-opacity-95 text-theme1 text-2xl">
          Feel free to contact me for any opportunity.
        </p>
        <br /><br />
        <div class="flex flex-row items-center gap-6 text-white text-2xl">
          <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
          <p>barzie02@gmail.com</p>
        </div>
        <br />
        <div class="flex flex-row items-center gap-6 text-white text-2xl">
          <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon
          ><a
            class="underline"
            href="https://github.com/Barziee"
            target="_blank"
            >Github</a
          >
        </div>
        <br />
        <div class="flex flex-row items-center gap-6 text-white text-2xl">
          <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon
          ><a
            class="underline"
            href="https://www.linkedin.com/in/bar-ronen-4519b51bb/"
            target="_blank"
            >Linkedin</a
          >
        </div>
        <br />
        <div class="flex flex-row items-center gap-4 text-white text-2xl">
          <font-awesome-icon :icon="['fab', 'discord']"></font-awesome-icon>
          <p>Barzie#8292</p>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "./BaseSection.vue";

export default defineComponent({
  name: "Contact",
  components: {
    BaseSection,
  },
});
</script>
