import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ColorPicker from "vue3-colorpicker";

import App from "./App.vue";
import router from "./router";

library.add(fas);

const db = createPinia()
db.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(db);
app.use(router);
app.use(ColorPicker);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component('FontAwesomeLayers', FontAwesomeLayers)
app.mount("#app");