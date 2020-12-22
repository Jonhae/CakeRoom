<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <!-- <transition :name="transitionName"> -->
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data() {
    return {
      // 转场名称
      // transitionName: "slide-forward",
      // map集合存放route先后顺序
      // map: new Map(),
    };
  },
  // 侦听路由变化
  // watch: {
  //   $route(to, from) {
  //     if (!this.map[to.path]) {
  //       // 过渡时间为0.4s
  //       this.map[to.path] = new Date().getTime() + 0.4;
  //     }
  //     if (!this.map[from.path]) {
  //       this.map[from.path] = new Date().getTime();
  //     }
  //     if (this.map[to.path] > this.map[from.path]) {
  //       this.transitionName = "slide-forward";
  //     } else {
  //       this.transitionName = "slide-back";
  //     }
  //   },
  // },

};
</script>


<style scoped>
@import "./assets/css/base.css";

/* 路由转场样式 */
/* .slide-forward-enter {
    transform: translate(100%);
}
.slide-forward-enter-active {
    transition: all .4s ease-in-out;
}
.slide-forward-leave-active {
    transform: translate(-100%);
    transition: all .4s ease-in-out;
}
.slide-back-enter {
    transform: translate(-100%);
}
.slide-back-enter-active {
    transition: all .4s ease-in-out;
}
.slide-back-leave-active {
    transform: translate(100%);
    transition: all .4s ease-in-out;
} */
</style>