<template>
  <nav
    class="col-span-1 row-span-4 grid grid-cols-3 grid-rows-6 justify-items-center"
  >
    <div class="flex flex-col col-start-2 row-start-2">
      <Link :to="'/'" :text="'About Me'" />
      <Link :to="'/resume'" :text="'Resume'" />
    </div>
  </nav>
</template>

//
<script lang="ts">
import { defineComponent } from "vue";
import Link from "./Link.vue";

export default defineComponent({
  name: "Navigation",
  components: {
    Link,
  },
});
</script>
