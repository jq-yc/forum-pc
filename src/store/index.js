import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
  },
  getters: {},
  mutations: {
    SET_USERINFO: (state, user) => {
      state.userInfo = user;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
  actions: {},
  modules: {},
});
