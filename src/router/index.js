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
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/articleDetail/articleDetail.vue"),
  },
  {
    path: "/setting",
    name: "mySetting",
    component: () => import("../views/mySetting/mySetting.vue"),
    children: [
      {
        path: "personal-info",
        component: () =>
          import("../views/mySetting/personalInfo/personalInfo.vue"),
      },
      {
        path: "account-setting",
        component: () =>
          import("../views/mySetting/accountSetting/accountSetting.vue"),
      },
      {
        path: "shield-manage",
        component: () =>
          import("../views/mySetting/shieldManage/shieldManage.vue"),
      },
      {
        path: "resume-manage",
        component: () =>
          import("../views/mySetting/resumeManage/resumeManage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
