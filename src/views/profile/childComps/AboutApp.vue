<template>
  <div id="aboutApp">
    <nav-bar class="nav-bar">
        <template v-slot:left>
            <div class="back"><img src="~assets/img/common/back.svg" alt=""  @click="backClick" /></div>
        </template>
        <template v-slot:center><div class="about">关于</div></template>
    </nav-bar>
    <div class="logo"><img src="~assets/img/profile/logo.png" alt=""></div>
    <div class="text">当前版本号 1.1.1</div>
    <div class="bottomExplain">
        <span>用户协议</span>
        <span class="distance">|</span>
        <span>隐私政策</span>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
    name:'AboutApp',
    components:{
        NavBar,
    },
    data() {
        return {
            
        }
    },
    methods: {
        backClick() {
            this.$router.back();
        }
    },

}
</script>

<style scoped>
.nav-bar {
    background-color: #fff;
    margin-bottom: 110px;
}
.about {
    color: #000;
    font-size: 18px;
}
.back img{
    margin-top: 12px;
    margin-right: 10px;
}
.logo img {
    display: block;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-bottom: 10px;
}
.text {
    text-align: center;
}
.bottomExplain {
    position: fixed;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 58px;
    background-color: #fff;
    text-align: center;
    line-height: 58px;
}
.bottomExplain span {
    font-size: 14px;
    color: #000;
}
.bottomExplain span:hover {
    color: red;
}
.distance {
    margin: 0 5px;
}
</style>