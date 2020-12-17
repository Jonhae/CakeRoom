<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @offSetClick="titleClick" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-param-info ref="param" :param-info="paramInfo" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <detail-recommend ref="recommend" />
      <goods-list :goods="recommendList" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommend from './childComps/DetailRecommend';
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getDetail, Goods, GoodsParam, getRecommend} from "../../network/detaili";
import { debounce } from "common/utils";

//vuex的映射
import {mapActions} from 'vuex'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailParamInfo,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailRecommend,
    GoodsList,
    DetailBottomBar,
    BackTop,

    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommendList: [],
      themeTopYs: [],
      getThemeTopYs:null,
      currentIndex:0,
      isShowBackTop:false,
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //console.log(res);

      // 2.1.获取顶部的图片轮播数据
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;

      // 2.2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns);

      // 2.3.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 2.4.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.rule);

      // 2.6.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list;
      }
    });

    // 3.获取推荐数据
    getRecommend().then(res => {
      //console.log(res);
      this.recommendList = res.data.data.list
    })

    // 4.给grtThemeTopYs赋值(对给this.themeTopYs赋值的操作进行防抖)
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = [];
      // push进数组里,然后根据-this.themeTopYs[index]点击进行滚动
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // 这个是为了contentScroll里面的if好判断
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop * 2);
      //console.log(this.themeTopYs);
    }, 200);
  },
  mounted() {
    //方法二
    //防抖刷新图片
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("detailImgLoad", () => {
      refresh();
    });
    this.$bus.$on('recommend',() => {
      refresh()
    })
  },
  methods: {
    //vuex的映射方法,相当于这个函数被映射到了这里，这个本质上调用$store.dispath函数
    ...mapActions(['addCart']),

    //方法一
    //刷新图片，防止scroll滚动不了
    // imgLoad() {
    //   this.$refs.scroll.refresh()
    //   console.log(11);
    // },
    imgLoad() {
      this.getThemeTopYs();
      //console.log(111111111111111);
    },
    titleClick(index) {
      //console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 800);
    },
    //一滚动就会监听
    contentScroll(position) {
      // 1.获取Y值
      const positionY = -position.y;
      //console.log(positionY);
      //console.log(this.$refs.nav.currentIndex);
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          //console.log(i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    /*
     ***  返回顶部
     */
    backClick() {
      //拿到scroll对象的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    contentScroll(position) {
      //console.log(position);
      // 因为默认是负值，所以取正
      // 1.判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000
    },


      addToCart() {
        console.log(12121);
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.newPrice = this.goods.oldPrice
      product.iid = this.iid

      //2.将商品添加到购物车里
      //Toast方法一：
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })

      // item是一个对象，数组里面是一个对象
      // for (let item of this.$store.state.cartList) {
      //   console.log(item);
      // }

      // 3.添加到购物车成功  （里面完成了操作返回信息给你promise）
      // Toast方法二：
      this.addCart(product).then(res => {
        //console.log(res);
        this.show = true;
        this.message = res;

        setTimeout(() => {
          this.show = false;
          this.message = '';
        }, 1500);
      })
    }
  },
};
</script>

<style scoped>
/* 局部滚动 */
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh; /*注意这个*/
}
.content {
  height: calc(100% - 44px - 49px);
}
/* 固定 */
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>