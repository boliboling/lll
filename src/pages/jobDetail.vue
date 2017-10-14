<template>
<div class="job-detail">
  <mt-header>
  <router-link to="/" slot="left">
    <mt-button icon="back"> <span style="padding-left:1.5rem;font-size:1.25rem;vertical-align:middle;color:black;font-weight:500;">岗位详情</span></mt-button>
  </router-link>
  <mt-button  slot="right">
    <span class="iconfont icon-star"></span>
  </mt-button>
  <mt-button  slot="right">
    <span class="iconfont icon-fenxiang"></span>
  </mt-button>
  <mt-button  slot="right">
    <span class="iconfont icon-info" style="margin-right:1rem;"></span>
   </mt-button>

</mt-header>
<div class="job-style job-word">111</div>
<div class="job-main">
<div class="job-style">
     <div class="job-monery">11111</div>
     <div class="job-time">111</div>
   </div>
</div>
<div class="welfare">
  <span class="iconfont icon-dizhi wel-con"> 温岭-城东街道</span>
  <span class="iconfont icon-buoumaotubiao03 wel-con"> 不限</span>
  <span class="iconfont icon-boshimao wel-con"> 大专</span>
  <span class="iconfont icon-bag wel-con"> 一年</span>
</div>
<hr style="border:none;border-top:1rem solid rgb(228,239,246);" />
<div class="info ">
<div style="display:flex;width:95%;margin:0 auto;">
  <div class="title info-bottom">
  <span style="color:black;padding-right: 1rem;">钱江摩托</span>
  <div class="bag info-bottom">
  <span class="iconfont icon-renzheng item-renz" style="vertical-align:middle;color:white;font-size:0.4rem">已认证</span>
  </div></div>
  <div class="two">
    <span class="iconfont icon-two"></span>
  </div>
  </div>
  <div class="intro info-bottom">
    <span class="item-con">股份制企业 |</span>
    <span class="item-con">100111 |</span>
    <span class="item-con">212</span>
  </div>
  <div class="item info-item">
    <span class="item-con con-style">包住</span>
    <span class="item-con con-style">五险</span>
    <span class="item-con con-style">培训</span>
    <span class="item-con con-style">8小时工作制</span>
  </div>
</div>
<div class="distance">
 <router-link to="#">
   <span>温岭市 <span style="color:#0b91e2;">(距你28.0km)</span></span>
  <div class="map">

  </div>
  </router-link>
</div>
</div>
</template>

<script>
  export default {
    data(){
      return {
       joblist:[]
      }
    },
      created(){
           let _this = this;
        _this.$http.get('/api/getJobList').then((res)=>{
        this.joblist=res.data;
        },(err)=>{
          console.log(err);
        })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .job-main
  width 100%
  margin 0 auto
  border-bottom 1px solid #d5d5db
 .job-style
  width 90%
  margin 0 auto
  display flex
  justify-content space-between
  padding 0.6rem 0
  .job-word
   font-size 1.25rem
   font-weight 400
   color #393736
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
  .mint-button
   padding 0 0.5rem !important
   vertical-align -webkit-baseline-middle
   .mintui
    color #0d73c0
   .job-out
    border-bottom 1px solid #d5d5db
 .welfare
   width 100%
   margin 1rem auto
   height auto
   color #646565
   font-size 1rem
   .wel-con
    width 20%
    margin 0 auto
    padding-left 0.2rem
 .info
  width 100%
  margin 1rem auto
  height auto
  color #646565
  padding-bottom 1.5rem
  border-bottom 1px solid #d5d5db
 .title
  display flex
  height 30px
  line-height 30px
 .info-bottom
  padding-bottom 0.8rem
  width 95%
 .info-item
  padding-top 0.5rem
  width 95%
  margin 0 auto
 .item-con
  width 20%
  margin 0 auto
  padding-left 0.5rem
 .con-style
  background-color #b6dbf3
  padding 5px 10px
  border-radius 10px
.bag
 width 80px
 height 10px
 line-height 10px
 background-color #ed6513
 border-radius 10px
 text-align center
 padding-top 5px



</style>
