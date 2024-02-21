import "./shared/styles/index.scss";

import { createApp } from "vue";
import { createYmaps } from "vue-yandex-maps";
import App from "./app/App.vue";
import VueTheMask from "vue-the-mask";
import router from "./app/router";
const app = createApp(App);
app.use(VueTheMask);
app.use(
  createYmaps({
    apikey: "your-api-key",
  })
);
app.use(router);
app.mount("#app");
