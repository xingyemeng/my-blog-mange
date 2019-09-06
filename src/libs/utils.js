import Cookies from 'js-cookie'
import config from '@/config'

const TOKEN_KEY = 'token'
const { cookieExp } = config
export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token,  { expires: cookieExp || 1 })
}
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if(token) {
        return token
    } else {
        return false
    }
}
export const getMenuByRoute = (list, access) => {
    let res = []
    list.forEach(item => {
        if(item.meta && !item.meta.hideMenu) {

        }
    })
}
