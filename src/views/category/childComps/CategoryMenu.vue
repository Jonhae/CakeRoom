<template>
    <div>
    <scroll>
    <van-tree-select
      id="select"
      height="100vh"
      :items="items"
      :main-active-index.sync="active">
      <template #content>
        <scroll class="content">
        <!-- 蛋糕 -->
        <van-image
            class="test1"
            v-if="active === 0"
            src="https://www.dangao.com/imgbanner/new_class_Cake.jpg">
            <div>
              <p class="text"><pre>——  按材料  ——</pre></p>
              <category-content :recommend="recommend"></category-content> 
            </div>
            <div>
              <p class="text"><pre>——  按对象  ——</pre></p>
              <category-content :recommend="recommend1"></category-content>
            </div>
            <div>
              <p class="text"><pre>——  按材料  ——</pre></p>
              <category-content :recommend="recommend2"></category-content>
            </div>
            <div>
              <p class="text"><pre>——  按造型  ——</pre></p>
              <category-content :recommend="recommend3"></category-content>
            </div>
        </van-image>
        <!-- 鲜花 -->
        <van-image
            class="imgage"
            v-if="active === 1"
            src="https://img.redocn.com/sheji/20200817/xianhuasudihaibao_11118291.jpg.285.jpg" >
            <div>
              <p class="text"><pre>——  按用途  ——</pre></p>
              <category-content :recommend="flower"></category-content>
            </div>
            <div>
              <p class="text"><pre>——  按对象  ——</pre></p>
              <category-content :recommend="flower1"></category-content>
            </div>
        </van-image>
        <!-- 花篮 -->
        <van-image
            class="imgage"
            v-if="active === 2"
            src="https://www.dangao.com/imgbanner/new_class_Flower.jpg" >
            <div>
              <p class="text"><pre>——  按对象  ——</pre></p>
              
            </div>
        </van-image>
        <!-- 巧克力 -->
        <van-image
            class="imgage"
            v-if="active === 3"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608453154859&di=406b471c45b6ac4e5e676347cdc5becf&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F58%2F45%2F16pic_5845136_b.jpg" >
            <div>
              <p class="text"><pre>——  按对象  ——</pre></p>
              
            </div>
        </van-image>
        <!-- 果篮 -->
        <van-image
            class="none-product"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
            v-if="active === 4">
            <div>
              <p class="text">暂无该产品</p>
            </div>
        </van-image>
        </scroll>
      </template>
    </van-tree-select>
    </scroll>
    </div>
</template>

<script>
import CategoryContent from './CategoryContent'
import Scroll from "components/common/scroll/Scroll";

import { getMenuList } from "../../../network/category";

export default {
  name: "Category",
  components: {
      CategoryContent,
      Scroll,
  },
  data() {
    return {
      active: 0,
      items: [
          { text: "蛋糕" },
          { text: "鲜花" },
          { text: "花篮" },
          { text: "巧克力" },
          { text: "果篮" },
        ],
        recommend:[],
        recommend1:[],
        recommend2:[],
        recommend3:[],
        flower1:[],
    };
  },
  created() {
    this.getMenuList();
  },
    methods: {
    /**
     *  网络请求相关方法
     */
    getMenuList() {
      getMenuList().then((res) => {
        this.recommend = res.data.data.recommend.list;
        this.recommend1 = res.data.data.recommend1.list;
        this.recommend2 = res.data.data.recommend2.list;
        this.recommend3 = res.data.data.recommend3.list;
        this.flower = res.data.data.flower;
        this.flower1 = res.data.data.flower1;
        this.flower2 = res.data.data.flower2;
        //console.log(res);
      });
    },
  },
};
</script>

<style scoped>
#select {
    height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.text {
    text-align: center;
    margin: 10px 0;
}
.imgage {
    height: 88px;
}
.none-product {
  height: 0;
}
</style>