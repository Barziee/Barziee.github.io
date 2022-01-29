<template>
  <div class="media">
    <img
      :src="src"
      :alt="labelText"
      @mouseover="onHover"
      @mouseout="outHover"
      @click="showModal = true"
    />
    <div
      class="
        w-full
        text text-theme1
        font-bold
        media-title
        flex
        justify-center
        align-center
      "
      :style="{ 'background-color': labelColor }"
    >
      <p class="m-auto">{{ labelText }}</p>
    </div>
  </div>
  <transition name="fade" appear>
    <div
      class="modal-overlay"
      v-if="showModal"
      @click="showModal = false"
    ></div>
  </transition>
  <transition name="popOut" appear>
    <div
      :class="{ pop: showModal, modal: true, 'bg-theme1': true }"
      v-if="showModal"
      role="dialog"
    >
      <div class="grid grid-rows-12 h-full">
        <div class="row-start-1 row-span-1 grid grid-cols-7">
          <h1 class="text-3xl col-start-4 mt-3">{{ labelText }}</h1>
          <button @click="showModal = false" class="close-btn col-start-7">
            x
          </button>
        </div>
        <p class="row-start-2 row-span-1">Yampampampampamasdasdsad</p>
        <div class="row-start-3 row-span-7">
          <div v-if="modalMeditaType === 'embed'" class="h-full">
            <iframe
              class="iframe m-auto"
              :src="modalMediaSrc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div v-if="modalMeditaType === 'video'" class="h-full">
            <video width="320" height="240" controls class="m-auto">
              <source :src="modalMediaSrc" type="video/mp4" />
            </video>
          </div>
        </div>
        <p class="row-start-11 row-span-2 summary">
          pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam
          pam pam pam pam pam pam pam pam pam pam pam pam pam
        </p>
      </div>
    </div>
  </transition>
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
    const src = ref(projectObj.value.media.splashSrc);
    const labelText = projectObj.value.label.text;
    const labelColor = projectObj.value.label.color;
    const modalMeditaType = projectObj.value.media.modalMedia.type;
    const modalMediaSrc = projectObj.value.media.modalMedia.src;
    const timeoutId: Ref<number> = ref(0);
    return {
      src,
      labelText,
      labelColor,
      timeoutId,
      showModal: ref(false),
      modalMeditaType,
      modalMediaSrc,
    };
  },
  methods: {
    onHover() {
      this.timeoutId = setTimeout(() => {
        this.src = this.projectObj.media.fullMediaSrc;
      }, fullMediaDelay);
    },
    outHover() {
      this.src = this.projectObj.media.splashSrc;
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
  z-index: 2;
}
.media:hover {
  opacity: 1;
  transform: scale(1.15);
  border: 1px solid #eaeaea;
  z-index: 3;
  cursor: pointer;
}

.media-title {
  position: absolute;
  bottom: 0;
  height: 19%;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  height: 65%;
  width: 40%;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transform: none;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

.iframe {
  height: 100%;
  width: 57%;
}

.close-btn {
  background-color: #c9c9c9;
  border-top-right-radius: 1rem;
}

.close-btn:hover {
  background-color: #b7b7b7;
}

.summary {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.popOut-enter-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}
.popOut-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.popOut-enter {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
.popOut-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.pop {
  animation: pop 0.4s cubic-bezier(0.5, 0, 0.5, 1);
}

@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
