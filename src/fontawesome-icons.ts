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
} from "@fortawesome/free-solid-svg-icons";

const icons: IconDefinition[] = [
  faFilePdf,
  faGamepad,
  faXmark,
  faGears,
  faWandMagicSparkles,
  faPuzzlePiece,
  faCode,
];

icons.forEach((icon: IconDefinition) => library.add(icon));

export default FontAwesomeIcon;
