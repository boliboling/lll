<template>
<div class="mapic">
 <div class="option">
   <div class="ok" @click="showDialog('isShowNav')">
     <div class="iconfont icon-daohang" style="padding-bottom:0.3rem;"></div>
     导航
   </div>
   <div class="ok">
      <div class="iconfont icon-falut" style="padding-bottom:0.3rem;"></div>
      纠错
   </div>
   </div>
  <div class="head-bar" >
   <router-link to="/" slot="left">
    <span class="iconfont icon-left" style="font-size:1.5rem;">  公司地址</span>
  </router-link>
</div>
<mapCom></mapCom>
<div class="foot">
  <span>查看附近相似岗位</span>
</div>
<my-dialog :is-show="isShowNav"  @on-close="hideDialog('isShowNav')"></my-dialog>
   </div>
</template>

<script>
import mapCom from 'components/map.vue'
import MyDialog from 'components/toast'
  export default {
    components:{
      mapCom,
      MyDialog
    },
    data(){
      return {
       show:true,
       isShowNav: false
      }
    },
    methods: {
    showDialog (param) {
      this[param] = true
    },
    hideDialog (param) {
      this[param] = false
    }
  }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.map
 height 100vh !important
.head-bar
 padding 1rem 0.5rem
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
  color #237def
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
