<template>
  <div class="index">
  <scroller :on-infinite="infinite" ref="myscroller">
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
    <div class="job-content">
      <Job :joblist="joblist"></Job>
    </div>
  </div>
  </scroller>
   <Nava></Nava>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import Swiper from 'components/swiper.vue'
import Job from 'components/job/job.vue'
import Nava from 'components/navbar.vue'
import VueAMap from 'vue-amap'
export default{
    components:{
       Swiper,
       Job,
       Nava
    },
    data(){
      return {
       navlist:[],
       noData: '',
       joblist:[]
      }
    },
    created(){
        let _this = this;
        _this.$http.post('/api/getNavList').then((res)=>{
          _this.navlist=res.data;
          console.log(res.data);
        },(err)=>{
          console.log(err);
        });
       _this.$http.post('/api/getJobList').then((res) => {
        var  a;
       for (var i = 0; i <res.data.length; i++) {
         a=res.data[i];
         a.time1=_this. myfilter(a.updated);
         _this.joblist.push(a);
         console.log(_this.joblist);
         }},(err) => {
          console.log(err);
        })
      },
    methods:{
             infinite(done) {
                if(this.noData) {
                setTimeout(()=>{
                    this.$refs.myscroller.finishInfinite(2);
                })
                return;
                }
                let self = this;
                let start = this.joblist.length;

                setTimeout(() => {
                    for(let i = start + 1; i < start + 1; i++) {
                        self.joblist.push(i)
                    }
                    if(start > 30) {
                        self.noData = "没有更多数据"
                    }
                    self.$refs.myscroller.resize();
                    done()
                }, 1500)

            },
            refresh() {
                console.log('refresh')
            },
            myfilter(str){
                      if (!str) return ''
              var date = new Date(str)
              var time = new Date().getTime() - date.getTime()
              if (time < 0) {
                  return ''
              } else if ((time / 1000 < 30)) {
                  return '刚刚'
              } else if (time / 1000 < 60) {
                  return parseInt((time / 1000)) + '秒前'
              } else if ((time / 60000) < 60) {
                  return parseInt((time / 60000)) + '分钟前'
              } else if ((time / 3600000) < 24) {
                  return parseInt(time / 3600000) + '小时前'
              } else if ((time / 86400000) < 31) {
                  return parseInt(time / 86400000) + '天前'
              } else if ((time / 2592000000) < 12) {
                  return parseInt(time / 2592000000) + '月前'
              } else {
                  return parseInt(time / 31536000000) + '年前'
              }
            }
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixin.styl"
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
   display inline-blok
   margin 0 auto
   border-radius 20px
   background-color white
   .code
    width 5%
    margin 0 auto
    color white
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
     color #d0d4d3
     font-size 1.0rem




</style>
