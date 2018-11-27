import Vue from 'vue'
import App from './App.vue'

import router from './router/'
import Data from './data/data.js';
import FullCalendar from 'vue-full-calendar'
import BootstrapVue from 'bootstrap-vue'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false;

Vue.use(FullCalendar);
Vue.use(BootstrapVue);
Vue.use(VueMoment);

new Vue({
    render: h => h(App),
    data: Data,
    router
}).$mount('#app');
