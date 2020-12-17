<template>
  <div class="bar">
    <profile-bar-item v-for="(item,index) in barInfoList" :key="index" class="bar-item" :bar-info="item"></profile-bar-item>
  </div>
</template>

<script scoped>
import ProfileBarItem from './ProfileBarItem'
export default {
  name: 'ProfileBar',
  data() {
    return {
      barInfoList: [
        { title: '我的余额', num: 0.0, unit: '元' },
        { title: '我的优惠', num: 0, unit: '个' },
        { title: '我的积分', num: 0, unit: '分' }
      ]
    }
  },
  components: {
    ProfileBarItem
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  border-bottom: 10px solid #f1f1f1;
}
.bar-item {
  flex: 1;
  text-align: center;
  height: 80px;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bar-item:last-child {
  border-right: 0;
}
</style>