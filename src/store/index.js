import Vue from 'vue';
import Vuex from 'vuex';
import {login} from '@/api/user'
import {setToken, getToken} from "../libs/utils";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: getToken()
    },
    mutations: {
        setToken(state, token) {
            setToken(token)
            state.token = token
        }
    },
    actions: {
        handleLogin({commit}, {user_name, password}) {
            return new Promise((resolve, reject) => {
                login({user_name, password}).then(res => {
                    const data = res.data
                    commit('setToken', data.token)
                    resolve(data)
                })
            })

        }
    }
})
