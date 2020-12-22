<template>
  <div class="toast">
      <div v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    props:{
        message:{
            type:String,
            default:''
        },
        isShow:{
            type:Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 8px 8px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);

}
.toast div {
    padding: 8px 8px;
}
</style>