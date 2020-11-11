import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from "@/pages/Index";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
    { path: '/', component: Index },

];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

