<template>
  <BaseSection title="Resume">
    <template v-slot:section-body>
      <div class="grid grid-cols-12">
        <p class="text-opacity-95 text-theme1 col-start-1 col-span-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum pharetra ante id pulvinar. Integer finibus nisi viverra feugiat
          aliquet. Vestibulum vel fermentum nisl. Maecenas libero leo, ornare eu
          velit at, imperdiet pellentesque quam. Maecenas a tristique risus. Nam
          molestie erat pharetra, lacinia arcu non, hendrerit nibh. Cras et
          tincidunt elit, non eleifend erat. Cras pretium augue congue enim
          venenatis, sit amet tempor sem rhoncus. Quisque ut diam id quam
          malesuada tempor nec eget ex. Etiam lectus purus, mattis sed lectus
          nec, luctus maximus dui. Proin ultricies convallis velit, a fermentum
          augue feugiat non. Suspendisse consectetur lectus neque. Morbi at
          convallis odio, ac eleifend mauris.
        </p>
      </div>
    </template>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "./BaseSection.vue";

export default defineComponent({
  name: "Resume",
  components: {
    BaseSection,
  },
});
</script>
