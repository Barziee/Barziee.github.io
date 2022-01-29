<template>
  <BaseView>
    <template v-slot:view>
      <Contact />
    </template>
  </BaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseView from "./BaseView.vue";
import Contact from "@/components/Sections/Contact.vue";

export default defineComponent({
  name: "ContactView",
  components: {
    BaseView,
    Contact,
  },
});
</script>
