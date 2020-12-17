<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><div>蛋糕屋</div></template></nav-bar>
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        class="tab-control"
        ref="tabControl1"
        v-show="isTabFixed">
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type='3' 
            @scroll="contentScroll"> 
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <feature :recommend2="recommend2"></feature>
      <recommend-view :recommend="recommend" :recommend1="recommend1"></recommend-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2">
      </tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import Feature from './childComps/Feature'
import RecommendView from "./childComps/RecommendView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata,getHomeGoods } from "../../network/home";
import {debounce} from "common/utils"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    Feature,
    RecommendView,

    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      recommend1: [],
      recommend2: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
    }
  },
  destroyed() {
    console.log('home 销毁');
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    //一进来滚动到原来的位置进行一次刷新
    this.$refs.scroll.refresh()
    //console.log('活跃');
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    //console.log('不活跃');
  },

  created() {
    //主要逻辑放在methods里
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    // 这样只需调用方法就可以获取数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('homeImgLoad',() => {
      refresh()
      //console.log('----------图片加载完成111111111111');
    })
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //返回顶部
    backClick() {
      //拿到scroll对象的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    //滚动
    contentScroll(position) {
      //console.log(position);
      // 因为默认是负值，所以取正
      // 1.判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000

      // 2.决定TabControl是否吸顶（position:fixed）
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    swiperImgLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     *  网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        this.recommend1 = res.data.data.recommend1.list;
        this.recommend2 = res.data.data.recommend2.list;
      });
    },

    getHomeGoods(type) {
      //不能写死1，要复用，写死1，上拉获取数据就获取不到新的数据了
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //console.log(res);
        // 不能直接赋值，不然获取不到新数据，会覆盖之前的
        this.goods[type].list.push(...res.data.data.list);
        // 上面追加了一页数据，所以要+1 
        this.goods[type].page += 1;

        //this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: #E6CEAC    ;
  color: gray;
  font-size: 22px;
  /* 脱离文档流了 */
  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
/* 使用浏览器原生固定定位时的样式 */
/* .tab-control {
  position: sticky;
  top: 40px;
  z-index: 9;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  /* z-index要有定位才起效果 */
  /* relative，还是在原来的位置 */
  position: relative;
  z-index: 9;
}
</style>