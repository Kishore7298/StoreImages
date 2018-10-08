import api from "../../api/imgur";
import qs from "qs";

const state = {
    Token : window.localStorage.getItem('access_token')
};
const getters = {
    isLoggedIn : state => !!state.Token
};
const actions = {
    login : () => api.login(),
    finalizeLogin : ({commit},hash)=>{
        const query = qs.parse(hash.replace('#',''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('access_token',query.access_token)
    },
    logout: ({ commit }) => {
        commit('setToken',null);
    }
};
const mutations = {
    setToken : (state, Token)=>{
        state.Token = Token
    }

};
export default {
    state,
    getters,
    actions,
    mutations
}