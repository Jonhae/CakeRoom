<template>
  <div id="service">
    <h2>登录</h2>
    <p class="welcome">欢迎来到蛋糕屋！</p>
    <van-field v-model="phone" placeholder="请输入手机号码"  class="van-tel" clearable />
    <van-field v-model="sms" center clearable  placeholder="请输入短信验证码" class="van-sms" >
        <template #button>
            <van-button :disabled='disabled' size="small" type="primary" class="van-button" @click="verifyClick">{{btnTitle}}</van-button>
        </template>
    </van-field>
    <button class="button" @click="registerClick">登录</button>
    <p class="usepass" @click="usepassClick">使用邮箱登录</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LoginPassword",
  data() {
    return {
      phone: "",
      sms: "",
      btnTitle:'获取验证码',
      disabled: false,
      numCode:'',
    };
  },
  methods: {
    //获取验证码
    verifyClick() {
      if (this.validatePhone()) {
        // 如果合法的话发送网络请求
        this.validateBtn();
      }
    },
    // 发送验证码与倒计时
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = '获取验证码';
          this.disabled = false;
        } else {
          // 倒计时
           this.btnTitle = time + '秒后重试';
           this.disabled = true;
           time--;
        }
      },1000)
      for (var i = 0; i < 4; i++) {
        this.numCode += Math.floor(Math.random() * 10);
      }
      console.log(this.numCode);
    },
    // 验证手机号码
    validatePhone() {
      if (!this.phone) {
        this.$toast('手机号码不能为空')
        return false;

      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.$toast('请填写正确的手机号')
        return false
        
      } else {
        return true;
      }
    },
    // 登录
    registerClick() {
      if (this.sms === '' ) {
        
      } else if(this.sms != this.numCode) {
        this.$toast('验证码错误')
      } else {
        // 登录更改信息
        //this.$bus.$emit('change',this.phone)
        // 登录跳转页面
        this.$router.push('/profile')
      }
    },

    // 使用密码登录
    usepassClick() {
      this.$router.push('/login')
    },


  }
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
</style>