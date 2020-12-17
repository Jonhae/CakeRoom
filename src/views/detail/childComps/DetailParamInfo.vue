<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <p class="shop-params">商品参数</p>
    <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop-params {
  padding-bottom: 5px;
  border-bottom: 2px solid #f2f5f8;
}
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
    width: 100%;
    border-collapse: collapse;
}
.param-info table tr{
    height: 42px;
}
.param-info table tr td {
  width: 5px;
  border-bottom:  2px solid rgba(100,100,100,.1);
}
.info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
}
.info-param {
    border-top: 2px solid rgba(0,0,0,.1);
}
.info-param-value {
    color: #eb4868
}
</style>