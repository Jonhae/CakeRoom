<template>
  <div id="fuuit-tart">
      <scroll class="content" ref="scroll">
      <div class="logo">
          <img src="http://www.rabbitbake.com/wp-content/uploads/2015/03/tuzi01.png" alt="">
      </div>
      <div class="work">
          <h2>Our work</h2>
      </div>
      <p class="title">清新水果塔</p>
      <div v-for="(item,index) in image" :key="index" class="fruit-cake">
          <img :src="item" alt="" @load="imgload">
      </div>
      <div class="text">
          <p class="p1">
              小小的模样最适合作为冷餐茶点，酥爽的塔皮，搭配润滑香浓的穆斯林奶油霜，表面缀以当季最新鲜的水果，一口口绝对停不下来哟~
          </p>
          <p class="p2">塔皮与填充的内陷为固定搭配</p>
          <p class="p3">Topping部分的水果因地区供应有限，会随季节相应调整哟</p>
          <p class="p4">基本以草莓、蓝莓、树莓等颜色突出的水果为主</p>
          <p class="p5">购买前请与我们联系，确认你的产品属性</p>
          <p class="p6">55元4个</p>
          <p class="p7">105元8个</p>
          <p class="p8">[点击进入购买页面]</p>
          <p class="p9">商业合作价格另议</p>
          <p class="p10">E-mail：Sea@gmail.com</p>
      </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from '../components/common/scroll/Scroll'

import { debounce } from '../common/utils'

export default {
    name:'Fruittart',
    components:{
        Scroll,
    },
    data() {
        return {
            image:['http://www.rabbitbake.com/wp-content/uploads/2015/09/%E6%B8%85%E6%96%B0%E6%B0%B4%E6%9E%9C%E5%A1%943.jpg',
                'http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_1411.jpg',
                'http://www.rabbitbake.com/wp-content/uploads/2015/09/IMG_1520.jpg',
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
.p1,.p2,.p3,.p4,.p5,.p6,.p7,.p8,.p9,.p10{
    text-align: center;
}
.p2,.p3,.p4,.p5,.p8{
    color: rgb(153, 204, 255);
}
.p2,.p4,.p6,.p8,.p10{
    margin: 10px 0;
}
.p1,.p6,.p7,.p9,.p10{
    color: #000;
}

</style>