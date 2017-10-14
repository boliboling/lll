<template>
<div class="job">
<template>
  <div id="job" v-for="(item,index) in joblist">
  <router-link :to="item.url">
   <div class="job-style job-word">{{item.position}}</div>
   <div class="job-info">
     <span class="job-address  iconfont icon-dizhi"> {{item.address}} </span>
     <span class="job-name iconfont  icon-zhuye"> {{item.brand}} </span>
   </div>
   <div class="job-style">
     <div class="job-monery">{{item.salary}}</div>
     <div class="job-time">{{item.time}}</div>
   </div>
   </router-link>
  </div>
  </template>
  </div>

</template>

<script>
import moment from 'moment'
  export default {
    data(){
      return {
       joblist:[]
      }
    },
      created(){
           let _this = this;
        _this.$http.get('/api/getJobList').then((res)=>{
        var  a;
        for (var i = 0; i <res.data.length; i++) {
          a=res.data[i];
          a.time=moment(a.updated).format("YYYY/MM/DD");
          this.joblist.push(a);
        }
        },(err)=>{
          console.log(err);
        })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
