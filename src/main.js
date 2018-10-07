import Vue from "vue";
import App from "./App";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
   routes: [{  path:'/oauth2/callback', component:AuthHandler}],
})

new Vue({
    router,
    store,
    render: h=> h(App)
}).$mount('#app')