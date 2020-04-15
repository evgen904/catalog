import { Dashboard } from "@/api/index.js";
import Vue from "vue";

const state = {
  notifications: [],
  mutualSettlement: [],
  orders: []
};

const getters = {};

const actions = {
  async getNotifications({ commit }) {
    try {
      const notifications = await Dashboard.getNotifications();

      if (notifications.data && notifications.data.data.notifications.length) {
        commit('setNotifications', notifications.data.data.notifications)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  },
  async getMutualSettlement({ commit }) {
    try {
      const mutualSettlement = await Dashboard.getMutualSettlement();

      if (mutualSettlement.data && mutualSettlement.data.data.mutualSettlement.length) {
        commit('setMutualSettlement', mutualSettlement.data.data.mutualSettlement)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  },
  async getOrders({ commit }) {
    try {
      const orders = await Dashboard.getOrders();

      if (orders.data && orders.data.data.orders.length) {
        commit('setOrders', orders.data.data.orders)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  }
};

const mutations = {
  setNotifications(state, value) {
    state.notifications = value;
  },
  setMutualSettlement(state, value) {
    state.mutualSettlement = value;
  },
  setOrders(state, value) {
    state.orders = value;
  },
  setCombineOrderName(state, value) {
    Vue.set(state.orders[value.index], "combineOrder", value.value);
  },
  setNotificationsVisible(state, value) {
    Vue.set(state.notifications[value.index], "visibleNote", value.value);
  }
};

export default {
  namespaced: true,
  namespace: "dashboard",
  state,
  getters,
  actions,
  mutations
};
