import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from "@/pages/Index";
import LoginPage from "@/pages/LoginPage";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
    { path: '/', component: Index },
    { path: '/login', component: LoginPage},
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

