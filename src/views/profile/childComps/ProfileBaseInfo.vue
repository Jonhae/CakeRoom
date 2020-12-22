<template>
  <div class="base-info">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" />
    </div>
    <div class="login-info">
      <!-- <span class="login" v-if="userInfo" @click="itemClick">{{loginInfo}}</span> -->
      <button class="login clear-style" v-if="userInfo" @click="itemClick" :disabled='disabled'>{{loginInfo}}</button>
    </div>
    <div class="arrow" v-if="userInfo">
      <img src="~assets/img/common/arrow-left.svg" />
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "ProfileBaseInfo",
  data() {
    return {
      loginInfo: "立即登录",
      userInfo: true,
      disabled:false,
    };
  },
  components: {},
  methods: {
    itemClick() {
      if (this.$router.push("/login")) {
        this.$bus.$on("change", (email) => {
          this.loginInfo = '用户' + email;
          this.disabled = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.base-info {
  background-color: var(--color-tint);
  color: #fff;
  display: flex;
  padding: 10px;
  align-items: center;
}
.avatar {
  width: 80px;
}
.avatar img {
  width: 70px;
}
.login-info {
  flex: 2;
  margin-left: 10px;
  line-height: 22px;
}
.login {
  font-size: 18px;
}
.clear-style{
  border: none;
  background-color: transparent;
  outline: none;
}
.phone {
  display: flex;
  font-size: 14px;
}
.phone img {
  width: 22px;
  margin-left: -5px;
}
.arrow img {
  width: 22px;
}
</style>