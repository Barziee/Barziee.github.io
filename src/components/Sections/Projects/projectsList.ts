import IProject from "./models";

const TEXT_BG_OPACITY = 0.85;

const DEFAULT_LABEL_COLOR = `rgba(100, 100, 100, ${TEXT_BG_OPACITY})`;

const projectsList: IProject[] = [
  {
    media: {
      splashSrc: require("@/assets/images/kindred.png"),
      fullMediaSrc: require("@/assets/videos/kindred.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/iWDgP9ilnWg?autoplay=1",
      },
    },
    label: {
      text: "Kindred",
      color: DEFAULT_LABEL_COLOR,
    },
    size: 'small',
  },
  {
    media: {
      splashSrc: require("@/assets/images/dust.png"),
      fullMediaSrc: require("@/assets/videos/dust.webp"),
      modalMedia: {
        type: "embed",
        src: "https://www.youtube.com/embed/LD965o16UKg?autoplay=1",
      },
    },
    label: {
      text: "Dust 'till Gone",
      color: DEFAULT_LABEL_COLOR,
    },
    size: 'small',
  },
  {
    media: {
      splashSrc: require("@/assets/images/target_run.jpg"),
      fullMediaSrc: require("@/assets/videos/target_run.webp"),
      modalMedia: {
        type: "video",
        src: require("@/assets/videos/target_run.mp4"),
      },
    },
    label: {
      text: "Target Run",
      color: DEFAULT_LABEL_COLOR,
    },
    size: 'large',
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
      text: "Jumjump",
      color: DEFAULT_LABEL_COLOR,
    },
    size: 'small',
  },
  {
    media: {
      splashSrc: require("@/assets/images/acolyte.jpg"),
      fullMediaSrc: require("@/assets/videos/acolyte.webp"),
      modalMedia: {
        type: "video",
        src: require("@/assets/videos/acolyte.mp4"),
      },
    },
    label: {
      text: "Kindred",
      color: DEFAULT_LABEL_COLOR,
    },
    size: 'small',
  },
];
export default projectsList;
