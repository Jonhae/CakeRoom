import {request} from '../network/request'

export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params:{
            type:type,
            page:page,
            //Es6对象写法
            // type,
            // page 
        }
    })
}