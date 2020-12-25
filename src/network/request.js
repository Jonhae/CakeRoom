import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        //本地
        //baseURL: 'http://192.168.0.105:8080',
        //服务器
        baseURL: 'http://39.106.161.38:8081',
        timeout: 50000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        transformRequest: [
            data => {
              // data 就是你post请求传的值
              // 一下主要是吧数据拼接成 类似get格式
              let params = ''
              for (var index in data) {
                params += index + '=' + data[index] + '&'
              }
              return params
            }
          ]
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