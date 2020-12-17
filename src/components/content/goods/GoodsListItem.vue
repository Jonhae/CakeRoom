<template>
  <!-- v-lazy="getImg" -->
  <div class="goods-item" @click="itemClick">
    <img :src="getImg" alt="" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      // if判断防止home跳转到detail页面还监听home图片刷新页面
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$bus.$emit('homeImgLoad')
      } else if (this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('recommendImgLoad');
      }
    },
    itemClick() {
      //方式1
      this.$router.push('/detail/' + this.goodsItem.iid)
      //方式2,但取值的时候要通过$route.query.iid取值
      // this.$router.push({
      //   path:'/detail',
      //   query: {
      //     iid: this.goodsItem.iid
      //   }
      // })
    }
  },
  computed: {
    getImg() {
      //当一个条件为true时，后面的条件不再判断
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  margin-bottom: 10px;
  position: relative;
}
.goods-item img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;

}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;

}
.goods-info .collect {
    position: relative;
}
.goods-info .collect::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -14px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>