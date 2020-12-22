export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //state.cartList.push(payload) 不能直接添加商品到购物车
            /*
            ** 1.查找之前数组中是否有该商品
            ** item从数组遍历出来是一个对象，因为push的是一个对象
            */
            let oldProduct = null
            for (let item of context.state.cartList) {
                if (item.iid === payload.iid) {
                    oldProduct = item
                }
            }
            // 2.判断oldProduct，有该值说明购物车有此物品+1，没值添加到购物车
            if (oldProduct) {
                //oldProduct.count += 1
                context.commit('addCounter',oldProduct)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                // 添加一个新属性checked
                payload.checked = true
                context.commit('addToCart', payload)
                resolve('成功添加到购物车')
            }
        })
    }
}
