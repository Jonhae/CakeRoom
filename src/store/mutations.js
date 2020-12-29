export default {
    // payload是传过来的参数

    addCounter(state,payload) {
        payload.count += 1
    },
    addToCart(state,payload) {
        state.cartList.push(payload)
    },
}