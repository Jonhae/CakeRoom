<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryContent",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px 0;
}
.recommend-item {
  flex: 1;
  width: 33.3%;
  min-width: 33.3%;
  max-width: 33.3%;
  margin-bottom: 10px;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 2px;
}
.recommend .recommend-item a img {
  border-radius: 50%;
}
</style>