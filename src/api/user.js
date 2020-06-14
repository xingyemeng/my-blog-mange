import instance from '@/libs/axios'

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