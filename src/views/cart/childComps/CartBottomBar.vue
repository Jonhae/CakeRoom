<template>
    <div class="cart-bottom-bar">
        <div class="check-content">
            <!-- checkbutto默认有个布尔值，传个计算属性来判断全选不全选 -->
            <check-button class="check-button" :is-checked="isSelectAll" @click.native='checkClick' />
            <span>全选</span>
        </div>

        <div class="totalPrice">
            合计：{{totalPrice}}
        </div>

        <div class="calculate" @click="calcClick">
            去结算：{{checkLength}}
        </div>
    </div>  
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed:{
      totalPrice() {
          return '￥' + this.$store.state.cartList.filter(item => {
              return item.checked
          }).reduce((preValue,item) => {
              return preValue + item.newPrice * item.count  
          },0).toFixed(2)
      },
      checkLength() {
          return this.$store.state.cartList.filter(item => {
              return item.checked
          }).length
      },
      isSelectAll() {
          if (this.$store.state.cartList.length ===0) return false
          for (let item of this.$store.state.cartList) {
              // 如果有一个未选中状态，进入if条件，执行false
              if (!item.checked) {
                  return false
              }
          }
          //当全部选中，执行true
          return true
      }
  },
  methods: {
      checkClick() {
          if (this.isSelectAll) {  //如果全部选中，则把它们取消
              this.$store.state.cartList.forEach(item => {
                  item.checked = false;
              });
          } else { //否则全部选中
               this.$store.state.cartList.forEach(item => {
                  item.checked = true;
              });
          }
      },

      calcClick() {
          if (this.checkLength === 0) {
               this.$toast('请选择商品');
          } else {
              this.$toast('支付成功')
          }
      }
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  bottom: 36px;
  display: flex;
}
.check-content {
    display: flex;
    align-items: center;
    margin-left: 1px;
    width: 70px;
}
.check-button {
    margin-right: 5px;
}
.totalPrice {
    margin-left: 50px;
    padding-top: 11.5px;
    flex: 1;
}
.calculate {
    width: 90px;
    text-align: center;
    padding-top: 11.5px;
    background-color: red;
    color: #fff;
}
</style>