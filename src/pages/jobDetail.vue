<template>
<div class="job-detail">
  <div class="head-nav">
  <div class="left">
    <router-link to="/" slot="left">
   <span class="iconfont icon-left" onclick="window.history.go(-1)"></span>
   <span style="vertical-align:text-top;font-size:1.2rem;color:black;">岗位详情</span>
  </router-link>
  </div>
  <div class="right">
    <span class="iconfont icon-star right-item"></span>
    <span class="iconfont icon-fenxiang right-item"></span>
    <span class="iconfont icon-info right-item"></span>
  </div>
</div>
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
   <span>温岭市 <span style="color:#0b91e2;">(距你28.0km)</span></span>
  <router-link to="/amap">
  <div class="mapcon">
  <mapCom></mapCom>
  </div>
  </router-link>

</div>
</div>
</template>
<script>
import mapCom from 'components/map.vue'
  export default {
    components:{
      mapCom
    },
    data(){
      return {
    }
    },
      created(){
        let num=this.$route.params.id
        let _this = this;
      /*  _this.$http.post('/api/getJobDetail',
          {params:{num:num}}
          ).then((res)=>{
        this.jobdetail=res.data;
        console.info(res.data)
        },(err)=>{
          console.log(err);
        })*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.map
 height 20vh !important
.head-nav
  display flex
  padding 0.8rem 0.3rem
  border-bottom: 1px solid #dedee3;
  .left
   width 40%
   text-align left
   padding-top 0.3rem
  .right
   width 60%
   margin 0 auto
   text-align right
   .right-item
    padding 0.8rem
 .job-main
  width 100%
  margin 0 auto
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
.distance
 width 95%
 margin 0 auto
 .mapcon
  padding-top 0.8rem
.amap-demo
 height 16vh
</style>
