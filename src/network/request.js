import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        //baseURL: 'http://152.136.185.210:8000/api/w6',
        baseURL: 'http://192.168.0.105:8080',
        //baseURL: 'http://163m2u6284.zicp.vip:80',
        //baseURL: 'http://192.168.60.169:8080',
       //baseURL: 'http://39.106.161.38:8081',
        timeout: 20000
    })

    instance.interceptors.request.use(config => {
        //console.log(config);
        return config
    }, err => {
        //console.log(err);                     
    })

    instance.interceptors.response.use(res => {
        //console.log(res);
        return res
    }, err => {
         //console.log(err);
    })

    return instance(config)
}