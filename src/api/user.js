import axios from 'axios';
import config from '@/config'

const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
export const login = ({user_name, password}) => {
    const data = {
        user_name,
        password
    };
    return instance.post('admin/login', data)
}
