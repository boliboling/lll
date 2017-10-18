<template>
<div id="job">
<template>
  <div class="job border-1px"  v-for="(item,index) in joblist">
  <router-link :to="item.url+item.id">
   <div class="job-style job-word">{{item.position}}</div>
   <div class="job-info">
     <span class="job-address  iconfont icon-dizhi"> {{item.address}} </span>
     <span class="job-name iconfont  icon-zhuye"> {{item.brand}} </span>
   </div>
   <div class="job-style">
     <div class="job-monery">{{item.salary}}</div>
     <div class="job-time">{{item.time1}}</div>
   </div>
   </router-link>
  </div>
  </template>
  </div>

</template>

<script>
  export default {
    props:{
      joblist:{
        type:Array,
        default:null
      }
    },
    data(){
      return {
       joblist:[]
      }
    },
    methods:{},
      created(){ },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.job
 border-1px(rgb(236, 243, 248))
 .job-style
  width 90%
  margin 0 auto
  display flex
  justify-content space-between
  padding 0.8rem 0
 .job-word
   font-size 1.25rem
   font-weight 400
   color #393736
  .job-monery
   color #f24227
 .job-info
  width 90%
  margin 0 auto
  .job-name
   padding-left 0.5rem






</style>
