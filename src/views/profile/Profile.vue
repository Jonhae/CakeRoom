<template>
  <div id="profile">
    <profile-base-info></profile-base-info>
    <profile-bar></profile-bar>
    <div class="user-item" @click="userItemClcik">
      <profile-tool-item v-for="(item,index) in userList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
    <div class="adress-item" @click="adressClick">
      <profile-tool-item v-for="(item,index) in adressList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
    <div class="app-item" @click="appClick">
      <profile-tool-item v-for="(item,index) in appList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
  </div>
</template>

<script>
import ProfileBaseInfo from "./childComps/ProfileBaseInfo";
import ProfileBar from "./childComps/ProfileBar";
import ProfileToolItem from "./childComps/ProfileToolItem";

export default {
  name: "Profile",
  components: {
    ProfileBaseInfo,
    ProfileBar,
    ProfileToolItem,
  },
  data() {
    return {
      userList: [
        { title: '我的消息', icon: require('assets/img/profile/message.svg') },
        { title: '积分商城', icon: require('assets/img/profile/pointer.svg') },
        { title: '会员卡', icon: require('assets/img/profile/vip.svg') }
      ],
      adressList: [
        { title: '收货人地址管理', icon: require('assets/img/profile/adress.svg') },
      ],
      appList: [
        { title: '关于蛋糕屋', icon: require('assets/img/profile/shopping.svg') }
      ],
    }
  },
  methods: {
    userItemClcik() {
      if(this.$store.state.isLogins) {
      } else {
        this.$toast('登录执行相关操作')
      }
    },
    appClick() {
      this.$router.push('/aboutApp')
    },
    adressClick() {
      if(this.$store.state.isLogins) {
        this.$router.push('/addresslist')
      } else {
        this.$toast('登录执行相关操作')
      }
    }
  },
};
</script>

<style scoped>
.profile {
  height: 100vh;
}
.user-item{
  border-bottom: 10px solid #f1f1f1;
}
</style>