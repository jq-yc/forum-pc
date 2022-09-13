import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
// import "https://at.alicdn.com/t/c/font_3646349_28wfloukbm3.js"; //引入iconfont
// import "@/assets/iconfont/iconfont.js"; //引入iconfont
import "tailwindcss/tailwind.css"; // 引入tailwind
Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
