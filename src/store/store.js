import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations'
import { getters } from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        matrix: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, "E"]]
    },
    getters,
    mutations
});
