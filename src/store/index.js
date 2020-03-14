import Vue from 'vue'
import Vuex from 'vuex'
//import Сookie from 'cookie'
import Сookies from 'js-cookie'

import dashboard from "./modules/dashboard";
import catalog from "./modules/catalog";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    catalog
  },

  state: {
    user: {
      loggedIn: false,
      loginError: ''
    }
  },

  getters: {
    auth(state) {
      return state.user
    }
  },

  actions: {
    async login({commit}, formData) {
      try {
        const user = await new Promise(res => {
          setTimeout(
            () =>
              res({
                data:
                  {
                    "success": true,
                    "data": {
                      "user": {
                        login: "admin@mail.ru",
                        password: "123456"
                      }
                    },
                    "errors": [],
                    "actions": [],
                    "platform": "js",
                    "uuid": "1570692860",
                    "timestamp": 1570693767
                  }
              }),
            1000
          );
        });

        if (user.data.data.user.login == formData.login && user.data.data.user.password == formData.password) {
          commit('setLoginError', '')
          commit('setLoggedIn', true)
          Сookies.set('auth', true)
        } else {
          commit('setLoginError', 'Неизвестное имя пользователя.\nПерепроверьте или попробуйте ваш адрес email.')
        }

      } catch (e) {
        console.log(e);
        throw e
      }
    }
  },

  mutations: {
    setLoggedIn(state, val) {
      state.user.loggedIn = val;
    },
    setLoginError(state, val) {
      state.user.loginError = val;
    }
  }
})
