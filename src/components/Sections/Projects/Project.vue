<template>
  <div class="media">
    <img
      :src="src"
      :alt="labelText"
      @mouseover="onHover"
      @mouseout="outHover"
    />
    <div
      class="w-full text text-theme1 font-bold media-title flex justify-center align-center"
      :style="{ 'background-color': labelColor }"
    >
      <p class="m-auto">{{ labelText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, toRefs } from "vue";
import IProject from "./models";

const fullMediaDelay = 100;

export default defineComponent({
  name: "Project",
  props: {
    projectObj: {
      type: Object as () => IProject,
      required: true,
    },
  },
  setup(props) {
    const { projectObj }: { projectObj: Ref<IProject> } = toRefs(props);
    const src = ref(projectObj.value.media.splash_src);
    const labelText = projectObj.value.label.text;
    const labelColor = projectObj.value.label.color;
    const timeoutId: Ref<number> = ref(0);
    return {
      src,
      labelText,
      labelColor,
      timeoutId,
    };
  },
  methods: {
    onHover() {
      this.timeoutId = setTimeout(() => {
        this.src = this.projectObj.media.full_media_src;
      }, fullMediaDelay);
    },
    outHover() {
      this.src = this.projectObj.media.splash_src;
      clearTimeout(this.timeoutId);
    },
  },
});
</script>

<style lang="scss" scoped>
.media {
  opacity: 0.7;
  transition: all 0.5s;
  position: relative;
  border: 1px solid #818181;
}
.media:hover {
  opacity: 1;
  transform: scale(1.15);
  border: 1px solid #eaeaea;
  z-index: 999;
}

.media-title {
  position: absolute;
  bottom: 0;
  height: 19%;
}
</style>
