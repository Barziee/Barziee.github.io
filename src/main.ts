import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import FontAwesomeIcons from "./fontawesome-icons";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcons)
  .use(store)
  .use(router)
  .mount("#app");
