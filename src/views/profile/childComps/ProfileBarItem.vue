<template>
  <div>
    <div class="item-num">
      <span class="num">{{barInfo.num}}</span>{{barInfo.unit}}
    </div>
    <div class="item-titile">
      {{barInfo.title}}
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'ProfileBarItem',
  props: {
    barInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.item-num {
  line-height: 40px;
  font-size: 14px;
}
.item-titile {
  font-size: 14px;
}
.num {
  color: #ff5f3e;
  font-weight: 700;
  font-size: 24px;
}
</style>