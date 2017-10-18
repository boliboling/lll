<template>
  <div id="app">
  <keep-alive>
      <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    methods:{}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
   width 100%
   height 100%
   overflow hidden
</style>
