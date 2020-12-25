<template>
  <div id="username">
    <nav-bar class="nav-bar">
        <template v-slot:left>
            <div class="back"><img src="~assets/img/common/back.svg" alt=""  @click="backClick" /></div>
        </template>
        <template v-slot:center><div class="compile">修改用户名</div></template>
    </nav-bar>
    <van-cell-group>
      <van-field v-model="value" clearable />
    </van-cell-group>
    <button class="button" @click="saveClick">保存</button>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "UserName",
  components: {
    NavBar,
  },
  data() {
    return {
        value:'',
        // username:'',
    };
  },
    created() {
       this.value = window.sessionStorage.getItem('username')
    },
  methods: {
      backClick() {
          this.$router.back()
      },
      saveClick() {
          this.$bus.$emit('saveUsername',this.value)
        //sessionStorage.setItem('username',this.value)
          this.$toast('保存成功')
      }
  },




  beforeRouteEnter(to, from, next) {
    // 添加背景色
    document.querySelector('body').setAttribute('style', 'background-color:#F8F8F8')
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 去除背景色
    document.querySelector('body').setAttribute('style', '')
    next()
  }
};
</script>

<style scoped>
.nav-bar {
    background-color: #fff;
    margin-bottom: 20px;
}
.compile {
    color: #000;
}
.back img{
    margin-top: 12px;
    margin-right: 10px;
}
.button {
    width: 330px;
    height: 40px;
    background-color: 	#FF6347;
    color: #fff;
    border: none;
    display: block;
    margin: 25px auto;
}
</style>