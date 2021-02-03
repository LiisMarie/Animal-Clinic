import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuex from 'vuex'
Vue.use(Vuex);
import { BootstrapVue } from 'bootstrap-vue';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import VCalendar from 'v-calendar';
Vue.use(VCalendar);
import { setupCalendar} from 'v-calendar'

setupCalendar({
  componentPrefix: 'vc'
});

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';


import 'jquery'
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
