import instance from '@/libs/axios'

export const login = ({user_name, password}) => {
    const data = {
        user_name,
        password
    };
    return instance.post('admin/login', data)
}
