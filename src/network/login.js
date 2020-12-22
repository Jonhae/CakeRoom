import {request} from './request'

export function getEmail(qq) {
    return request({
      url:"/sendEmail",
      method: 'post',
      data: {
        email: qq
      }
    })
  }