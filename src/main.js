import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from '@/common/date.filter';

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
