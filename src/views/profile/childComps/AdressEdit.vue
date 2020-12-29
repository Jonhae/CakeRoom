<template>
  <div id="addressEdit">
    <nav-bar class="nav-bar">
      <template v-slot:left><div class="back"><img src="~assets/img/common/back.svg" alt="" @click="backClick" /></div></template>
      <template v-slot:center><div class="compile">地址编辑</div></template>
    </nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"/>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
import areaList from 'assets/js/area'

export default {
  name: "AddressEdit",
  components:{
      NavBar,
      isSave:false,
  },
  data() {
    return {
      areaList,
      iid:1,
      addressPush:{},
    };
  },
  methods: {
    onSave(content) {
      this.$toast("保存成功");
      console.log(content);
      this.$store.state.adressInfo = content
      this.addressPush = {
          id: this.iid++,
          name: this.$store.state.adressInfo.name,
          tel: this.$store.state.adressInfo.tel,
          address: this.$store.state.adressInfo.province + this.$store.state.adressInfo.county + this.$store.state.adressInfo.city + this.$store.state.adressInfo.addressDetail,
      }
      this.$store.state.addressPush = this.addressPush
      console.log(this.addressPush);
    },
    onDelete() {
      this.$toast("删除成功");
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