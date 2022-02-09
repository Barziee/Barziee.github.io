<template>
  <div
    :class="{
      'row-span-2': size === 'large',
      'row-span-1': size === 'small',
      media: true,
      'col-span-1': true,
    }"
  >
    <img
      :src="src"
      :alt="labelText"
      @mouseover="onHover"
      @mouseout="outHover"
      @click="openModal"
      :class="{
        vertical: size === 'large',
        horizontal: size === 'small',
      }"
    />
    <div
      :class="{
        'w-full': true,
        text: true,
        'text-theme1': true,
        'font-bold': true,
        flex: true,
        'justify-center': true,
        'align-center': true,
        'media-title-vertical': size === 'large',
        'media-title-horizontal': size === 'small',
      }"
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
        <div class="row-start-1 row-span-1 grid grid-cols-12">
          <h1 class="text-3xl col-start-6 col-span-2 mt-3">{{ labelText }}</h1>
          <button
            @click="showModal = false"
            class="close-btn col-start-12 col-span-1"
          >
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
          <div v-if="modalMeditaType === 'video'" class="h-full flex">
            <video controls autoplay class="m-auto video">
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
    const size = projectObj.value.size;
    const timeoutId: Ref<number> = ref(0);
    return {
      src,
      labelText,
      labelColor,
      timeoutId,
      showModal: ref(false),
      modalMeditaType,
      modalMediaSrc,
      size,
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
    openModal() {
      this.showModal = true;
      this.$nextTick(() => {
        const video = document.getElementsByTagName("video")[0];
        if (video) {
          video.volume = 0.03;
        }
      });
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

.media-title-horizontal {
  position: absolute;
  bottom: 0;
  height: 18%;
}

.media-title-vertical {
  position: absolute;
  bottom: 0;
  height: 9%;
}

.vertical {
  height: 400px;
  width: 220px;
}

.horizontal {
  height: 190px;
  width: 340px;
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
  height: 90%;
  width: 48%;
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

.video {
  width: auto;
  max-width: 70%;
  height: auto;
  max-height: 100%;
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
