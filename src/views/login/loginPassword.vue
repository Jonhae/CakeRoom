<template>
  <div id="service">
    <h2>登录</h2>
    <p class="welcome">欢迎来到蛋糕屋！</p>
    <van-form>
      <van-field v-model="username" placeholder="请输入手机号码" class="van-username" />
      <van-field v-model="password" type="password" placeholder="请输入密码" class="van-password" />
    </van-form>
    <button class="button">登录</button>
    <p class="use-verify" @click="verifyCodeClick">使用邮箱登录</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  
  methods: {
    verifyCodeClick() {
      this.$router.push("/login");
    },
    
  },
};
</script>

<style scoped>
h2 {
  margin: 40px 0 12px 16px;
}
.welcome {
  margin: 0 0 50px 16px;
}
.van-username .van-password {
  font-size: 16px;
}
.van-button {
  border-radius: 15px;
  background-color: #fff;
  color: red;
  border: 1px solid #ff6347;
  margin-right: 1 0px;
}
.button {
  width: 300px;
  height: 40px;
  background-color: #ff6347;
  color: #fff;
  border-radius: 15px;
  border: none;
  display: block;
  margin: 25px auto;
}
.use-verify {
  text-align: center;
  font-size: 14px;
}
</style>