import Vue from 'vue';
import Router from 'vue-router';
import Store from '@/store'
import routes from './routes';
import {getToken, setToken} from "../libs/utils";

Vue.use(Router)
const router =  new Router({
    mode: 'history',
    routes
});
const LOGIN_NAME = 'login'
router.beforeEach((to, from, next) => {
    const token = getToken();
    if(!token && to.name !== LOGIN_NAME) {
        // 如果未登陆且跳转的非登录页
        next({
            name: LOGIN_NAME
        })
    } else if(!token && to.name === LOGIN_NAME) {
        // 如果未登陆且跳转登录页
        next()
    }else  if(token && to.name === LOGIN_NAME) {
        // 如果已登陆且跳转的登录页
        next({
            name: 'home'
        })
    } else if(token && to.name !== LOGIN_NAME) {
        // 如果已登陆且跳转的非登录页
        // 首先要获取用户信息，如果token超时那么就会失败，然后把token清空，同时跳转login
        Store.dispatch('handleGetUserInfo').then(res => {
            console.log(res)
            if(res.status === 1) {
                console.log(123)
                setToken('')
                next({
                    name: LOGIN_NAME
                })
            } else {
                next()
            }
        })
    }
});
export default router
