import axios from 'axios';
import config from '@/config'
/*
* 单独放可以给所有路由设置统一配置
* */

const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export  default instance
