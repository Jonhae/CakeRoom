<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item" alt=""
        :key="index"
        @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    // 监听每张图片
    imgLoad() {
      // 方法一：
      // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
      //if (++this.counter === this.imagesLength) {
        //this.$emit("imgLoad");
        //console.log('回调1次');
      //}

      this.$emit("imgLoad");

      //方法二：
      this.$bus.$emit('detailImgLoad')
    },
  },
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-list img {
  width: 100%;
}
</style>