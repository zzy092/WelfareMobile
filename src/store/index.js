import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  cartList: JSON.parse(sessionStorage.getItem("cartList") || "[]"),
  token: sessionStorage.getItem("token") || "",
  // corpid: localStorage.getItem("corpid") || "",
  category: JSON.parse(sessionStorage.getItem("category") || "[]"),
  defAddress:sessionStorage.getItem("defAddress")||''
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
