import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../css/reset.css";
import "element-ui/lib/theme-chalk/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay
} from "swiper/js/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
