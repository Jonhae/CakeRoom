<template>
  <div class="tab-control">
      <div class="tab-control-item" 
           v-for="(item,index) in titles" :key="index"
           :class="{active:index === currentIndex}"
           @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    naem:'TabControl',
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    },
    props:{
        titles:{
            type:Array,
            default() {
                return [];
            }
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
    margin-bottom: 3px;
}
.tab-control-item span {
    padding: 5px 5px 3px 5px;
}
.tab-control-item {
    flex: 1;
}
.active span {
    border-bottom: 2px solid var(--color-tint);
}
</style>