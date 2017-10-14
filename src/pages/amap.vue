<template>
<div class="mapic">
 <div class="option">
   <div class="ok">
     <div class="iconfont icon-daohang" style="padding-bottom:0.3rem;"></div>
     导航
   </div>
   <div class="ok">
      <div class="iconfont icon-falut" style="padding-bottom:0.3rem;"></div>
      纠错
   </div>
   </div>
  <mt-header>
   <router-link to="/" slot="left">
    <mt-button icon="back"> <span style="padding-left:1.5rem;font-size:1.25rem;vertical-align:middle;color:black;font-weight:500;">公司地址</span></mt-button>
  </router-link>
</mt-header>
<Mapic></Mapic>
<div class="foot">
  <span>查看附近相似岗位</span>
</div>
</div>
</template>

<script>
import Mapic from 'components/map.vue'
  export default {
    components:{
      Mapic
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
.mapic
 position relative
 width 100%
 height 100%
.mint-header
  width 100% !important
  margin 0 auto
  height 60px !important
  line-height 60px !important
  position fixed
  top 0
  background-color white !important
  padding-bottom 0.35rem !important
  border-bottom 1px solid #d5d5db
  .mintui-back:before
    color #1264e3
 .foot
  position fixed
  bottom 0
  text-align center
  color #0e6ce4
  width 100%
  height 40px
  line-height 40px
  background-color white
 .option
  position absolute
  z-index 600
  top 50px
  right 0
  padding 1rem
  .ok
   padding-top 0.5rem
   padding-bottom 0.5rem
   text-align center
   font-size 1.0rem
   width 65px
   background-color  rgba(79, 77, 77,0.7)
   margin-top 10px
   color white
   z-index 800
</style>
