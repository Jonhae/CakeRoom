<template>
  <div id="profile">
    <profile-base-info></profile-base-info>
    <profile-bar></profile-bar>
    <div class="user-item">
      <profile-tool-item v-for="(item,index) in userList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
    <div class="app-item">
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
      appList: [
        { title: '收货人地址管理', icon: require('assets/img/profile/cart.svg') },
        { title: '关于蛋糕屋', icon: require('assets/img/profile/shopping.svg') }
      ]
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