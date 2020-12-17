<template>
  <div class="check-button" :class="{ checked :isChecked}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script scoped>
export default {
  name: 'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.check-button{
  /* background-color: #e5e5e5; */
  border-radius: 100%;
  border: 2px solid #e5e5e5;
}
.checked{
  border: 2px solid red;
  background-color: red;
}
</style>