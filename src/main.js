import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/** 导入Vant组件库 */
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 引入rem, 设置根字体大小
import "./utils/rem";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
