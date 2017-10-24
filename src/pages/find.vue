<template>
  <div class="find">
   <div class="find-tab">
     <div class="tab">
     <div class="title">发现</div>
     <div class="iconfont icon-saoma"></div>
     </div>
   </div>
   <div class="item-con">
    <div class="con-one">职场充电</div>
    <div class="item">
    <div class="item-left">
      <div class="iconfont icon-p"></div>
      <div>PPT培训</div>
    </div>
    <div class="item-right">
      <div>PPT实战训练营(第五期)</div>
      <div class="iconfont icon-dot"></div>
      <div class="iconfont icon-xia"></div>
    </div>
    </div>
    </div>
      <Nava></Nava>
   </div>
</template>

<script>
import Nava from 'components/navbar.vue'
export default{
    components:{
       Nava
    },
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.find
 height 100%
 .find-tab
   width 100%
   margin 0 auto
   height 40px
   line-height 40px
   background-color #206ada
   color white
   .tab
    width 90%
    display flex
    margin 0 auto
    justify-content space-between
   .title
    font-size 1.5rem
  .item-con
    width 100%
    background-color rgb(228, 239, 246)
    height 100%
    margin 0px auto
    .con-one
     font-size 0.8rem
     padding 3%
    .item
     width 100%
     margin 0px auto
     display flex
     height 40px
     line-height 40px
     background-color white
     font-size 0.5rem
     .item-left
      width 45%
      margin 0px auto
      display flex
      color grey
      .icon-p
       margin 0 5px
      .icon-p:before
       background-color red
       padding 4px
       color white
       border-radius 5px
     .item-right
      display flex
      width 55%
      margin 0px auto

 </style>
