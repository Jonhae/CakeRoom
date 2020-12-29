<template>
  <div id="compile">
    <nav-bar class="nav-bar">
        <template v-slot:left>
            <div class="back"><img src="~assets/img/common/back.svg" alt=""  @click="backClick" /></div>
        </template>
        <template v-slot:center><div class="shop-center">编辑资料</div></template>
    </nav-bar>
    <p class="basic-info">基础信息</p>
    <div class="username">
        <div class="s1">头像</div>
        <div class="s2"><img src="~assets/img/profile/right arrow.png"></div>
    </div>
    <div class="username" @click="changeName">
        <div class="s1">用户名</div>
        <div class="s2"><img src="~assets/img/profile/right arrow.png"></div>
    </div>
    <div class="username" @click="addAdress">
        <div class="s1">收货人地址</div>
        <div class="s2"><img src="~assets/img/profile/right arrow.png"></div>
    </div>

    <p class="tel-info">账号绑定</p>
    <div class="username">
        <div class="s1">手机</div>
        <div class="s2">未绑定</div>
    </div>
    <div class="username">
        <div class="s1">微信</div>
        <div class="s2">未绑定</div>
    </div>
    <div class="username">
        <div class="s1">QQ</div>
        <div class="s2">未绑定</div>
    </div>

  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default {
    name:'Compile',
    components:{
        NavBar,
    },
    data() {
        return {
            value:'',
            tel:''
        }
    },
    methods: {
        backClick() {
            this.$router.back();
        },
        changeName() {
            this.$router.push('/compile/username')
        },
        addAdress() {
            this.$router.push('/addresslist')
        }
    },

}
</script>

<style scoped>
.nav-bar {
    color: #000;
}
.back img{
    margin-top: 12px;
    margin-right: 10px;
}
.basic-info {
    font-size: 15px;
    margin: 25px 0 25px 10px;
}
.tel-info {
    font-size: 15px;
    margin: 35px 0 10px 10px;
}
.username {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #e5e5e5;
    color: #000;
}
.s1 {
    margin-left: 10px;
    font-size: 18px;
    float: left;
    line-height: 54px;
}
.s2 {
    margin-right: 10px;
    line-height: 54px;
    float: right;
}
.s2 img {
    width: 20px;
    height: 20px;
}

</style>