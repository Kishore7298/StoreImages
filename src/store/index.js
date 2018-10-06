import Vuex from "vuex";
import Vue from 'vue';
import auth from "./modules/auth";

Vue.use(Vuex);

export default Vuex.Store({
    modules:{
        auth
    }
})