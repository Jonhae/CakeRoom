<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back"><img src="~assets/img/common/back.svg" alt="" @click="backClick" /></div>
      </template>
      <template v-slot:center class="title">
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            :class="{ 'active': currentIndex === index }"
            @click="titleClick(index)">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('offSetClick',index)
    },
    backClick() {
        this.$router.back()
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
.back img{
  margin-top: 12px;
}
</style>