<template>
  <div id="service">
    <h2>登录</h2>
    <p class="welcome">欢迎来到蛋糕屋！</p>
    <van-field v-model="tel" placeholder="请输入手机号码"  class="van-tel" clearable />
    <van-field v-model="sms" center clearable  placeholder="请输入短信验证码" class="van-sms" >
        <template #button>
            <van-button size="small" type="primary" class="van-button">获取验证码</van-button>
        </template>
    </van-field>
    <button class="button">登录</button>
    <p class="usepass">使用密码登录</p>
    <div class="service-tel">客服电话：020-8888-1234</div>
  </div>
</template>

<script>


export default {
  name: "Login",
  data() {
    return {
      tel: "",
      sms: "",
    };
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
.van-tel .van-sms {
    font-size: 16px;
}
.van-button {
    border-radius: 15px;
    background-color: #fff;
    color: red;
    border: 1px solid #FF6347;
    margin-right: 1 0px;
}
.button {
    width: 300px;
    height: 40px;
    background-color: 	#FF6347;
    color: #fff;
    border-radius: 15px;
    border: none;
    display: block;
    margin: 25px auto;
}
.usepass {
    text-align: center;
    font-size: 14px;
}
.service-tel {
    position: fixed;
    left: 25%;
    bottom: 8%;
}
</style>