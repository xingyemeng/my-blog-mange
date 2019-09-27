import Vue from 'vue';
import Vuex from 'vuex';
import routes from '@/router/routes'
import {login, getUserInfo, logOut} from '../api/user'
import {setToken, getToken, getMenuByRoute, getBreadFromRoute} from '../libs/utils';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: getToken(),
        userName: '',
        avatarImgPath: '',
        userId: '',
        access: '',
        breadcrumb: [],
        homeRoute: {
            link: '/home',
            name: '首页'
        },
        rloeList: []  // 权限管理中的角色列表
    },
    getters: {
        menuList: (state) => getMenuByRoute(routes, state.access)
    },
    mutations: {
        setAvatar (state, avatarPath) {
            state.avatarImgPath = 'http://localhost:8001/' + avatarPath
        },
        setUserId (state, id) {
            state.userId = id
        },
        setToken(state, token) {
            setToken(token)
            state.token = token
        },
        setUserName(state, name) {
            state.userName = name
        },
        setAccess(state, access) {
            state.access = access
        },
        setBreadcrumb(state, route) {
            state.breadcrumb = getBreadFromRoute(route, state.homeRoute)
        }
    },
    actions: {
        handleLogin({commit}, {user_name, password}) {
            return new Promise((resolve, reject) => {
                login({user_name, password}).then(res => {
                    const data = res.data
                    commit('setToken', data.token)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handleGetUserInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(res => {
                    const data = res.data.info
                    commit("setAvatar", data.avatarImgPath)
                    commit("setUserName", data.userName)
                    commit("setUserId", data.userId)
                    commit("setAccess", data.access)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        handleLogout({commit, state}) {
            return new Promise((resolve, reject) => {
                setToken('')
                commit('setToken', '')
                resolve()
            })
        },
        handleGetRoleList() {

        }
    }
})
