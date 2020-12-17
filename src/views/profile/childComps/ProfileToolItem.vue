<template>
  <div class="tool-item">
    <div class="tool-icon">
      <img :src="toolInfo.icon">
    </div>
    <div class="tool-title">
      <div>{{toolInfo.title}}</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'ProfileToolItem',
  props: {
    toolInfo: {
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
.tool-item {
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  padding: 10px;
}
.tool-icon {
  display: flex;
  align-items: center;
}
.tool-icon img {
  width: 22px;
}
.tool-title {
  margin-left: 15px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
.tool-item:last-child>.tool-title{
  border-bottom: 0;
}
</style>