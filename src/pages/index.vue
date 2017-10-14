<template>
  <div class="index">
  <Swiper></Swiper>
  <div class="nav">
    <div class="nav-item" v-for="(item,index) in navlist">
    <router-link :to="item.url">
      <div class="item-icon iconfont" :class="item.icon"></div>
      <div class="item-word">
        {{item.word}}
      </div>
      </router-link>
    </div>
  </div>
    <hr style="border:none;border-top:1rem solid rgb(228,239,246);" />
    <div class="joblist">
    <div class="job-head">
        <div class="title">猜你喜欢</div>
        <div class="iconfont icon-xiugai"> 修改</div>
    </div>
    <div class="job-content border-1px">
      <Job></Job>
    </div>

  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'components/swiper.vue'
import Job from 'components/job/job.vue'
import VueAMap from 'vue-amap'

export default{
    components:{
       Swiper,
       Job
    },
    data(){
      return {
       navlist:[]
      }
    },
    created(){
        let _this = this;
        _this.$http.get('/api/getNavList').then((res)=>{
        this.navlist=res.data;
        },(err)=>{
          console.log(err);
        })
    },
    methods:{
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixin.styl"
.nav
 width 100%
 margin 0 auto
 display flex
 .nav-item
  width 25%
  margin 10px auto
  text-align center
  .item-icon
     font-size: 2rem
  .item-word
   margin-top 0.5rem
   font-size 0.9rem
   color #1f2021
.joblist
  width 100%
  margin 1rem auto
  padding-bottom 0.5rem
  font-size 0.9rem
  color #2196F3
  height auto
  .job-head
   width 90%
   margin 0 auto
   display flex
   justify-content space-between
   padding-bottom 0.5rem
  .job-content
     padding 0.5rem 0
     border-1px(rgb(236, 243, 248))
     color #d0d4d3
     font-size 1.0rem




</style>
