<template>
  <div id="addressList">
    <nav-bar class="nav-bar">
      <template v-slot:left><div class="back"><img src="~assets/img/common/back.svg" alt="" @click="backClick" /></div></template>
      <template v-slot:center><div class="compile">收货人地址</div></template>
    </nav-bar>
    <van-address-list @add="onAdd" />
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "AddressList",
  components:{
      NavBar
  },
  methods: {
    onAdd() {
      this.$toast("新增地址");
    },
    backClick() {
          this.$router.back()
    },
  },
};
</script>

<style scoped>
.nav-bar {
    background-color: #fff;
    margin-bottom: 20px;
}
.compile {
    color: #000;
}
.back img{
    margin-top: 12px;
    margin-right: 10px;
}
</style>