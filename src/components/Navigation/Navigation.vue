<template>
  <nav
    class="col-span-2 row-span-6 grid grid-cols-3 grid-rows-6"
  >
    <div class="flex flex-col gap-2 col-start-2 row-start-2 col-span-2 mt-24">
      <Link
        v-for="(link, index) in links"
        :to="link.to"
        :text="link.text"
        :key="`Link-${index}`"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, readonly } from "vue";
import Link from "./Link.vue";
import links from "./links";

export default defineComponent({
  name: "Navigation",
  components: {
    Link,
  },
  setup() {
    return {
      links: readonly(links),
    };
  },
});
</script>
