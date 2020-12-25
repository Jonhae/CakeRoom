<template>
  <div id="fuuit-tart">
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type='3'>
      <div class="logo">
          <img src="http://www.rabbitbake.com/wp-content/uploads/2015/03/tuzi01.png" alt="">
      </div>
      <div class="work">
          <h2>Our work</h2>
      </div>
      <p class="title">柠檬玛德琳</p>
      <div v-for="(item,index) in image" :key="index" class="fruit-cake">
          <img :src="item" alt="" @load="imgload">
      </div>
      <div class="text">
          <p class="p1">
              玛德琳，小小的贝壳蛋糕，一种法国家庭风味十足的小点心，普鲁斯特将这款居家式的小点心推向了世界蛋糕殿堂。加入糖渍好的柠檬皮屑，沁人心脾的柠檬香气让你在一个昏昏欲睡的下午一下子便精神起来了哟~
          </p>
          <p class="p2">6块装   39元</p>
          <p class="p3">12块装   75元</p>
          <p class="p4">[点击进入购买页面]</p>
          <p class="p5">商业合作价格另议</p>
          <p class="p6">E-mail：Sea@gmail.com</p>
      </div>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import Scroll from '../components/common/scroll/Scroll'

import { debounce } from '../common/utils'
import {backTopMixin} from '../common/mixin'

export default {
    name:'Fruittart',
    components:{
        Scroll,
    },
    mixins:[backTopMixin],
    data() {
        return {
            image:['http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_1745.jpg',
                'http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_1753.jpg',
                'http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_1769.jpg',
                'http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_4028.png',
            ]
        }
    },
    methods: {
        imgload() {
            debounce(this.$refs.scroll.refresh(), 100);
        }
    },
}
</script>

<style scoped>
#fuuit-tart {
    height: 100vh;
}
.content {
    height: calc(100% - 49px - 44px);
}
.logo {
    margin: 30px 0 25px 25px;
}
.work {
    width: 100%;
    height: 80px;
    background-color: rgb(252, 252, 252);
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.work h2 {
    padding: 25px 0 0 20px;
}
.title {
    font-size: 18px;
    color: #000;
    margin: 60px 0 60px 20px;
}
.fruit-cake {
    display: flex;
}
.fruit-cake img {
    flex: 1;
    width: 100%;
    padding: 0 20px 10px 20px;
    height: 500px;
}
.text {
    width: 100%;
    padding: 0 20px 10px 20px;
}
.p1,.p2,.p3,.p4,.p5,.p6{
    text-align: center;
}
.p4{
    color: rgb(153, 204, 255);
}
.p2,.p4,.p6{
    margin: 10px 0;
}
.p1,.p2,.p3,.p5,.p6{
    color: #000;
}

</style>