import api from "../../api/imgur";

const state = {
    Token :null
};
const getters = {
    isLoggedIn : state => !!state.Token
};
const actions = {
    login : () => api.login(),
    logout: ({ commit }) => {
        commit('mutations',null);
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