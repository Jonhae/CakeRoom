<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center><div class="shop-center">购物车</div></template>
      <template v-slot:right><div>编辑</div></template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
    <!-- <van-submit-bar :price="3050" button-text="提交订单" >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar> -->
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar,

    Scroll,
  },
  data() {
    return {
      // checked:true,
    }
  },
  computed:{
    cartLength() {
      return this.$store.state.cartList.length
    }
  },
  activated() {
    // 进入到当前路由刷新一次scrollHeight，防止滚动不了
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.shop-center {
  font-size: 20px;
  color: #000;
}
#cart {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>