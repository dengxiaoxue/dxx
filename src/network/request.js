import axios from 'axios'
import store from '../vuex/vuex'
import router from '../router/index'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 5000
    })


    //2.axios的拦截器
    //2.1.请求拦截的作用
    instance.interceptors.request.use(config => {

        if (config.url === './test' && store.getters.getToken) {
            config.headers['authorization'] = 'Bearer ' + store.getters.getToken
        }
        return config
    }, err => {

    })

    //2.2.响应拦截
    instance.interceptors.response.use(res => {
        if (res.status === 200) {
            return res.data
        }
    }, err => {
        if (err.response.status === 401) {
            router.replace({
                path: '/login'
            })
        }
    })

    //3.发送真正的网络请求
    return instance(config)
}