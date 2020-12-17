<template>
  <div class="base-info" @click="itemClick">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg">
    </div>
    <div class="login-info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg">
        <div>暂无绑定手机号</div>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg">
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'ProfileBaseInfo',
  data() {
    return {}
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.push('/login/')
    }
  },
}
</script>

<style scoped>
.base-info {
  background-color: var(--color-tint);
  color: #fff;
  display: flex;
  padding: 10px;
  align-items: center;
}
.avatar{
  width: 80px;
}
.avatar img{
  width: 70px;
}
.login-info{
  flex: 2;  
  margin-left: 10px;
  line-height: 22px;
}
.login{
  font-size: 16px;
}
.phone{
  display: flex;
  font-size: 14px;
}
.phone img{
  width: 22px;
  margin-left: -5px;
}
.arrow img{
  width: 22px;
}
</style>