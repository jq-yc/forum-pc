import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  getters: {},
  mutations: {
    SET_USERINFO: (state, user) => {
      state.userInfo = user;
    },
  },
  actions: {},
  modules: {},
});
