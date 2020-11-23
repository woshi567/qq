import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jiao from './components/jiao'
import people from './components/people'
import lianxiren from './components/lianxiren'
import sousuo from './components/sousuo'
import axios from "axios";
Vue.prototype.axios = axios;
import MintUI from 'mint-ui';
Vue.use(MintUI);
import qs from 'qs'
Vue.prototype.qs=qs;
Vue.config.productionTip = false


Vue.component("jiao", jiao);
Vue.component("people", people);
Vue.component("lianxiren", lianxiren);
Vue.component("sousuo", sousuo);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
