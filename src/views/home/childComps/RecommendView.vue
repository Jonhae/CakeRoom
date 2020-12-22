<template>
  <div class="recommend-view">
    <h3>本周热卖</h3>
    <div class="recommend">
      <div
        v-for="(item, index) in recommend"
        :key="index"
        class="recommend-item">
        <!-- <a :href="item.link"> -->
          <img :src="item.image" alt="" @click="linkClick" />
        <!-- </a> -->
        <div>{{ item.title }}</div>
      </div>
    </div>
    <div class="recommend1">
      <div
        v-for="(item, index) in recommend1"
        :key="index"
        class="recommend-item">
        <!-- <a :href="item.link"> -->
          <img :src="item.image" alt="" @click="linkClick" />
        <!-- </a> -->
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
    recommend1: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    linkClick() {
      this.$router.push('/lemon')
    }
  },
};
</script>

<style>
.recommend-view h3 {
  padding-top: 10px;
  text-align: center;
}
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 8px 0 12px 0;
  /* border-bottom: 8px solid #eee; */
}
.recommend1 {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 0px 0 15px 0;
  /* border-bottom: 8px solid #eee; */
} 
.recommend-item {
  flex: 1;
  width: 25%;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.recommend .recommend-item  img {
  border-radius: 50%;
}
.recommend1 .recommend-item  img {
  border-radius: 50%;
}
</style>