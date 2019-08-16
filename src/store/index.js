import Vue from 'vue';
import Vuex from 'vuex';
import {login} from '@/api/user'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        handleLogin({commit}, {user_name, password}) {
            return new Promise((resolve, reject) => {
                login({user_name, password}).then(res => {
                    resolve(res.data)
                })
            })

        }
    }
})
