<template>
  <div id="app">
  <div class="search">
  <div class="outer">
  <div class="out">
      <span class="iconfont icon-sousu" style="color:rgb(186, 186, 184);"><span style="font-size:0.25em;"> 请输入职位名或公司名</span></span>
  </div>
  <div class="code">
      <span class="code iconfont icon-saoma"></span>   
  </div>
  </div>
  </div>
      <router-view></router-view>
  </div>

</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
   width 100%
   height 100%
   .search
     position absolute
     width 100%
     height: 2rem
     line-height: 2rem
     z-index 200
     text-align center
     top 20px
     .outer
      width 90%
      margin 0 auto
      display flex
      text-align center
     .out
      width 80%
      display inline-block
      margin 0 auto 
      border-radius 20px
      background-color white
     .code
      width 5%
      margin 0 auto
      color white
</style>
