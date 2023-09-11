import { createApp } from "vue";
import ECharts from "vue-echarts";
import { createPinia } from 'pinia'
import { use } from "echarts/core";
// import VueCarousel from "vue-carousel";
// import Vue from "vue";



// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
// import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);

import App from "./App.vue";
import router from "./router";
import "./index.css";
import "animate.css";
import Toast, { POSITION } from "vue-toastification";
import '@splidejs/vue-splide/css/core';
const options = {
  // You can set your default options here
};

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.component("v-chart", ECharts);
app.use(Toast, { position: POSITION.BOTTOM_LEFT});
// app.use(VueCarousel);
// Vue.use(VueCarousel);

app.mount("#app");

document.title = 'MySpurr';