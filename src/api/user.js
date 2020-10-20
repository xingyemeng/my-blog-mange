import instance from '@/libs/axios'
/**
 * 统一拦截响应报文
*/
instance.interceptors.response.use(function(response) {
    if(response.status === 200) {
        return response.data
    }
})

export const login = ({user_name, password}) => {
    const data = {
        user_name,
        password
    };
    return instance.post('admin/login', data)
}
export const getUserInfo = (token) => {
    return instance.post('admin/getUserInfo', {token: token})
}

export const addUserRoles = (token) => {
    return instance.post('auth/addUserRoles', {token})
}

export const getUserRolesDetail = (token) => {
    return instance.post('auth/userRolesDetail', {token})
}