<template>
  <div id="swiper">
<mt-swipe :auto="4000" style="width:100%;height:20vh;">
  <mt-swipe-item><img class="swiper-one" src="./04.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="swiper-one" src="./02.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="swiper-one" src="./03.jpg"></mt-swipe-item>
</mt-swipe>
  </div>

</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixin.styl"
   .swiper-one
    display:inline-block
    width:100%
    height:100%
    background-size:100% 100%
    background-repeat:no-repeat
/*   &.qita
     bg-image('qita')*/
/*  border-1px(rgba(7, 17, 27, 0.1))*/
</style>
