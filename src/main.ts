import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import "flowbite";

library.add(fas);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component('FontAwesomeLayers', FontAwesomeLayers)
app.mount("#app");