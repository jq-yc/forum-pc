import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/publish",
    name: "publish",
    component: () => import("@/views/publishArticle/publishArticle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
