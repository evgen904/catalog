import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router'
import store from './store'
import DateFilter from '@/common/date.filter';
import SumFilter from '@/common/sum.filter';

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.filter('date', DateFilter)
Vue.filter('sum', SumFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
