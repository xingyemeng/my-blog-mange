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
function accessPermission(item, access) {
    if(item.meta.access){
        if(access.include(item.meta.access)) {
            return true
        } else {
            return false
        }
    }
    return true
}
export const getMenuByRoute = (list, access) => {
    let res = []
    list.forEach(item => {
        if(item.meta && !item.meta.hideMenu && accessPermission(item, access)) {
            let obj = {
                name: item.meta.title,
                icon: item.meta.icon ?  item.meta.icon : '',
                path: item.path
            }
            if(item.children) {
                obj.children = getMenuByRoute(item.children, access)
            }
            res.push(obj)
        }
    })
    return res
}
