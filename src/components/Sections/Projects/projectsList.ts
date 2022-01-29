import IProject from "./models";

const TEXT_BG_OPACITY = 0.5;

const projectsList: IProject[] = [
  {
    media: {
      splashSrc: require("@/assets/images/kindred_splash.png"),
      fullMediaSrc: require("@/assets/videos/kindred_preview.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splashSrc: require("@/assets/images/kindred_splash.png"),
      fullMediaSrc: require("@/assets/videos/kindred_preview.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/IcQ21z4XDS8",
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splashSrc: require("@/assets/images/kindred_splash.png"),
      fullMediaSrc: require("@/assets/images/kindred_splash.png"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splashSrc: require("@/assets/images/jumjump.png"),
      fullMediaSrc: require("@/assets/videos/jumjump.webp"),
      modalMedia: {
        type: "video",
        src: require("@/assets/videos/jumjump.mp4"),
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splashSrc: require("@/assets/images/kindred_splash.png"),
      fullMediaSrc: require("@/assets/videos/kindred_preview.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splashSrc: require("@/assets/images/kindred_splash.png"),
      fullMediaSrc: require("@/assets/videos/kindred_preview.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
];
export default projectsList;
