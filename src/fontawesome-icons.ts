import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faGears,
  faGamepad,
  faFilePdf,
  faWandMagicSparkles,
  faPuzzlePiece,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const icons: IconDefinition[] = [
  faFilePdf,
  faGamepad,
  faXmark,
  faGears,
  faWandMagicSparkles,
  faPuzzlePiece,
  faCode,
  faEnvelope,
  faGithub,
  faLinkedin,
  faDiscord,
];

icons.forEach((icon: IconDefinition) => library.add(icon));

export default FontAwesomeIcon;
