import api from "../../api/imgur";
import { router } from '../../main';

const state = {
    images : []
};
const getters = {
    allImages : state => state.images
};
const actions = {
    async fetchImages({ rootState, commit }){
        const token = rootState.auth.Token;
        console.log(token);
        const response = await api.fetchImages(token);
        console.log(response);
        commit('setImages',response.data.data)
    },
    async uploadImages({rootState}, images){
        const token = rootState.auth.Token;
        await api.uploadImages(images,token);
        router.push('/');
    }
};
const mutations = {
    setImages : (state, images) => {
        state.images = images;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}