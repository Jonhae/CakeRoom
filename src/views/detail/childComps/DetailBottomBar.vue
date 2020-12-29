<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="selectClick">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buyClick">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      isLogins: false,
    };
  },

  methods: {
    addToCart() {
      if(this.$store.state.isLogins) {
        this.$emit("addToCart");
      } else {
        this.$toast('登录执行相关操作')
      }
    },
    selectClick() {
      if(this.$store.state.isLogins) {
        this.$toast('收藏成功')
      } else {
        this.$toast('登录执行相关操作')
      }
    },
    buyClick() {
      if(this.$store.state.isLogins) {
        this.$toast('购买成功')
      } else {
        this.$toast('登录执行相关操作')
      }
    },
  },
};
</script>

<style scope>
.bottom-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 8px auto 0;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>