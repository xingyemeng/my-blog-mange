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

function getFullPath(item) {

}
export const getMenuByRoute = (list, access) => {
    let res = []
    list.forEach(item => {
        if(item.meta && !item.meta.hideMenu && accessPermission(item, access)) {
            let obj = {
                name: item.meta.title,
                icon: item.meta.icon ?  item.meta.icon : '',
                path: item.name
            }
            if(item.children) {
                obj.children = getMenuByRoute(item.children, access)
            }
            res.push(obj)
        }
    })
    return res
}

/*
*  判断某个元素在数组中是否已经存在
*  @params arr:需要检测的数组， ele：需要检测是否重复的元素
*  @return Boolean
* */
export const ArrDeduplication = (arr, ele) => {

}
/*
* 路由元件中得到面包屑导航的数据
* @params route路由元件对象 homeRoute 固定的首页导航
* @return Array
* */
export const getBreadFromRoute = (route, homeRoute) => {
    let routeArr = route.matched
    routeArr.some(item => {
        if(item.name === config.homeName) {
            return [homeRoute]
        }
    })
    const len = routeArr.length - 1
    const openRoute = routeArr[len]
    let breadList = insertEleToArr([], openRoute)
    breadList = insertEleToArr(breadList, openRoute.parent)
    breadList.unshift(homeRoute)
    return breadList

}
function insertEleToArr(arr, obj) {
    if(obj.meta && !obj.meta.hideBread ) {
        let route = {
            link: obj.path,
            name: obj.meta.title ? obj.meta.title : '默认'
        }
        arr.unshift(route)
    }
    return arr
}

