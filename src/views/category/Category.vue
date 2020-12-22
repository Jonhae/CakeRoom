<template>
  <div id="category">
    <van-search v-model="value" placeholder="榴莲蛋糕" input-align="center" class="search" />
    <category-menu></category-menu>
  </div>
</template>

<script>
import CategoryMenu from "./childComps/CategoryMenu";


export default {
  name: "Category",
  components: {
    CategoryMenu,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
</style>