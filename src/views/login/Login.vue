<template>
  <div id="service">
    <h2>登录</h2>
    <p class="welcome">欢迎来到蛋糕屋！</p>
    <van-field v-model="email" placeholder="请输入邮箱"  class="van-tel" clearable />
    <van-field v-model="sms" center clearable  placeholder="请输入邮箱验证码" class="van-sms" >
        <template #button>
            <van-button :disabled='disabled' size="small" type="primary" class="van-button" @click="verifyClick">{{btnTitle}}</van-button>
        </template>
    </van-field>
    <button class="button" @click="registerClick">登录</button>
    <p class="usepass" @click="usepassClick">使用密码登录</p>
  </div>
</template>

<script>
import axios from 'axios'

import {getEmail} from '../../network/login'

export default {
  name: "Login",
  data() {
    return {
      email: "",
      sms: "",
      btnTitle:'获取验证码',
      disabled: false,
      qq:'',
      isLogin:false,
    };
  },
  created() {
    
  },
  methods: {
    //获取验证码
    verifyClick() {
      if (this.validatePhone()) {
        //倒计时
        this.validateBtn()
        // 如果合法的话发送网络请求
        getEmail(this.email).then((res) => {
        console.log(res);
        this.qq = res.data
     })
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
    },
    // 验证邮箱号码
    validatePhone() {
      if (!this.email) {
        this.$toast('邮箱不能为空')
        return false;
      } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email)) {
        this.$toast('请填写正确的邮箱号')
        return false
      } else {
        return true;
      }
    },
    // 登录
    registerClick() {
      if (this.sms === '' ) {
        
      } else if(this.sms != this.qq) {
        this.$toast('验证码错误')
      } else {
        // 登录更改信息
        this.$bus.$emit('change',this.email)
        // 传值到更改用户名组件
        sessionStorage.setItem('username',this.email)
        // 登录跳转页面
        this.$toast('登录成功')
        this.$router.push('/profile')
        // 登录成功发送一个true，可以使用某些功能了
        this.isLogin = true;
        // 在vuex仓库存储一个是否登录值
        this.$store.state.isLogins = true
        //console.log(this.$store.state.isLogins);
        this.$bus.$emit('ifLogin',this.isLogin)
      }
    },

    // 使用手机登录
    usepassClick() {
      this.$router.push('/loginPassword')
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