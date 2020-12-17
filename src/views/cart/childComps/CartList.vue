<template>
  <div class="cart-list">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
  name:'cartList',
  components:{
    CartListItem,
  },
  computed:{
    cartList() {
      return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>

</style>