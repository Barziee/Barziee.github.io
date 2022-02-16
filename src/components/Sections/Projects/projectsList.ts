import IProject, { IRole } from "./models";

const ROLES: { [key: string]: IRole } = {
  production: {
    text: "Production",
    icon: "gears",
  },
  techArt: {
    text: "Tech Art",
    icon: "wand-magic-sparkles",
  },
  design: {
    text: "Design",
    icon: "puzzle-piece",
  },
  development: {
    text: "Development",
    icon: "code",
  },
};

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
      color: "#1DBC70",
    },
    size: 'small',
    summary: 'A 2D Metroidvania for the PC, following a young hero in a quest for survival.<br>Weapons are armed with unique traversal abilities.<br>Kindred is all about fast-paced action and will require players to master their abilities.',
    context: 'Kindred is a commercial project made by Team Metroknights in the <a class="underline" href="https://www.road2.co.il/portfolio/?_industry=games" target="_blank" rel="noopener noreferrer">R2G Accelerator</a> for Games.',
    playLink: 'https://drive.google.com/drive/folders/1dLXEzXGEb7drUGX4BDboy5uGLvuyd9oN?usp=sharing',
    roles: [ROLES.production, ROLES.techArt],
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
      color: "#5A79AC",
    },
    size: 'small',
    summary: "A 2D Platformer for PC made in 48 hours.<br>You're a lost soul, wandering around an unknown spirit world.<br>Swing around and collect memories in the form of butterflies, recover your past and unveil your purpose.",
    context: "Dust 'till Gone is a game entry made for the 2021 Global Game Jam.",
    playLink: 'https://drive.google.com/drive/folders/1_gCaZeMsfRj8uRPzQCiu43mOvqnaqB01',
    roles: [ROLES.design, ROLES.techArt],
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
      color: "#E4824B",
    },
    size: 'large',
    summary: "A 3D Runner Mobile game.<br>You're a cowboy, tasked with preventing thieves from hijacking the train.<br>Knock the thieves out of the train using your gun.",
    context: 'Target Run is a commercial project made by Team Samurai in the Tafik program for hyper-casual games by Tiltan.',
    roles: [ROLES.design, ROLES.development],
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
      color: "#EF4444",
    },
    size: 'small',
    summary: 'A 2.5D Multiplayer Brawler-Platformer for the PC, made with Photon Engine.<br>Be the first to reach the top of the level.<br>Collect power-ups and use them to get advantages on other players.',
    context: 'Jumjump is an academic project for a multiplayer games development course.',
    roles: [ROLES.design, ROLES.techArt, ROLES.development],
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
      text: "Acolyte",
      color: "#D8B827",
    },
    size: 'small',
    summary: "A 2D Bullet-Hell PC game.<br>You're a powerful acolyte, tasked with banishing creatures using your divine magic.<br>Unique obtainable power ups will spawn during your encounters, each with its pros and cons, choose them wisely.",
    context: 'Acolyte is an academic project for a games production course.',
    playLink: 'https://drive.google.com/file/d/1bHCakunaSXu52GeIdlCFZ5J3RVL5zAo1/view',
    roles: [ROLES.design, ROLES.techArt],
  },
];
export default projectsList;
