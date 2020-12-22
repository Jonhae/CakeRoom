<template>
  <div class="recommend2">
    <div v-for="(item, index) in recommend2" :key="index" class="recommend-item2">
      <!-- <a :href="item.link"> -->
        <img :src="item.image" alt="" @click="itemClick" />
      <!-- </a> -->
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend2: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push('/fruittart')
    }
  },
};
</script>

<style>
.recommend2 {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item2 {
  flex: 1;
}
.recommend-item2 img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.recommend2 .recommend-item2 img {
  border-radius: 50%;
}
</style>