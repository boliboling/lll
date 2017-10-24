<template>
  <div class="recod">
   <div class="recod-con">
     <div class="left iconfont icon-kefu"></div>
     <div class="right">
       <div class="right-top">
         <div class="type">求职小助手</div>
         <div class="time" style="font-size:0.9rem;color:grey;" >10天前</div>
       </div>
       <div style="text-align:left;margin:8px 0px;font-size:0.9rem;color:grey;">审核未通过</div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  props:{

  },
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .recod-con
   width 95%
   margin 0 auto
  .recod-con
   margin-top 20px
   display flex
   text-align center
   height 50px
   .left
    width 20%
    margin 0 auto
    font-size 2rem
    line-height 50px
   .left:before
    background-color #208fd1
    padding 10px
    color white
    border-radius 10px
   .right
    width 80%
    margin 0 auto
    border-bottom 1px solid #e5dede
    .right-top
     display flex
     justify-content space-between

</style>
