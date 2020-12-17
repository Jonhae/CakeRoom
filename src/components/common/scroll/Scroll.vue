<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props:{
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    // 2.监听滚动的位置
    this.scroll.on('scroll',(position) => {
        //console.log(position);
        //position是参数
        this.$emit('scroll',position)
    })
    // 3.监听上拉事件
    this.scroll.on('pullingUp',() => {
        //console.log('上拉加载更多');
        this.$emit('pullingUp')
    })

    //this.scroll.scrollTo(0, 0);
  },
  methods: {
    //time=800 es6语法 默认传800
    scrollTo(x, y, time=800) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      //console.log('--------图片加载完成');
    }
  },

};
</script>

<style scoped>
</style>