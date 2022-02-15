import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const icons: IconDefinition[] = [faFilePdf, faGamepad];

icons.forEach((icon: IconDefinition) => library.add(icon));

export default FontAwesomeIcon;
