import "./shared/styles/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createYmaps } from "vue-yandex-maps";
import App from "./app/App.vue";
import VueTheMask from "vue-the-mask";
import router from "./app/router";
import { MotionPlugin } from "@vueuse/motion";
import VueKinesis from "vue-kinesis";
const app = createApp(App);
app.use(createPinia());
app.use(VueTheMask);
app.use(
  createYmaps({
    apikey: "your-api-key",
  })
);
app.use(VueKinesis);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
