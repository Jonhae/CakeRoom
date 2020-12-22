import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url:'/recommend'
    })
}

//用类的话就不用保存三个变量去取值
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.subtitle = itemInfo.subtitle
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realprice = itemInfo.realprice
    }
}

export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.sizes = rule.tables;
    }
}