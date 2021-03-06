import { Сatalog } from "@/api/index.js";
import Vue from "vue";

const state = {
  folders: [],
  product: null,
  products: [],
  searchProducts: [],
  searchFolders: [],
  modal: false,
  searchText: '',
  activeTableKeyUp: 'orders'
};

const getters = {};

const actions = {
  async getFolders({ commit }) {
    try {
      const notifications = await Сatalog.getFolders();

      if (notifications.data && notifications.data.data.folders.length) {
        commit('setFolders', notifications.data.data.folders)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  },
  async getProduct({ commit }, idProduct) {
    try {
      const notifications = await Сatalog.getProduct();

      if (notifications.data && notifications.data.data.product.length) {
        const product = notifications.data.data.product.find(item => item.code == idProduct);
        commit('setProduct', product)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  },
  async getProducts({ commit }) {
    try {
      const notifications = await Сatalog.getProducts();

      if (notifications.data && notifications.data.data.products.length) {
        commit('setProducts', notifications.data.data.products)
      }
    } catch (e) {
      console.log(e);
      throw e
    }
  },
};

const mutations = {
  setFolders(state, value) {
    state.folders = value;
  },
  setProduct(state, value) {
    state.product = value;
  },
  setProducts(state, value) {
    state.products = value;
  },
  setModal(state, value) {
    state.modal = value;
  },
  setCombineOrderName(state, value) {
    Vue.set(state.products[value.index], "combineOrder", value.value);
  },
  setCombineOrderSel(state, value) {
    Vue.set(state.products[value.index], "combineOrderSelected", value.value);
  },
  setSearchText(state, value) {
    state.searchText = value;
  },
  setSearchProducts(state, value) {
    state.searchProducts = value;
  },
  setSearchFolders(state, value) {
    state.searchFolders = value;
  },
  setOrder(state, value) {
    Vue.set(state.products[value.index], "order", value.value);
  },
  setActiveTableKeyUp(state, value) {
    state.activeTableKeyUp = value;
  }
};

export default {
  namespaced: true,
  namespace: "catalog",
  state,
  getters,
  actions,
  mutations
};
