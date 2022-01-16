import IProject from "./models";

const TEXT_BG_OPACITY = 0.5;

const projectsList: IProject[] = [
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/videos/kindred_preview.webp"),
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/videos/kindred_preview.webp"),
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/images/kindred_splash.png"),
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/images/kindred_splash.png"),
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/videos/kindred_preview.webp"),
    },
    label: {
      text: "Kindred",
      color: `rgba(102, 0, 255, ${TEXT_BG_OPACITY})`,
    },
  },
  {
    media: {
      splash_src: require("@/assets/images/kindred_splash.png"),
      full_media_src: require("@/assets/videos/kindred_preview.webp"),
    },
    label: {
      text: "Kindred",
      color: `rgba(255, 102, 0, ${TEXT_BG_OPACITY})`,
    },
  },
];
export default projectsList;
