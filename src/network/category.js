import {request} from './request'

export function getMenuList() {
  return request({
    url: "/category",
  })
}


