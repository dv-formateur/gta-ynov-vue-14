import Vue from 'vue'
import App from './App.vue'
import FullCalendar from 'vue-full-calendar';

Vue.config.productionTip = false
Vue.use(FullCalendar);

new Vue({
  render: h => h(App),
}).$mount('#app');
