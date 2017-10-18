<template>
  <div id="navbar">
      <div class="footer" v-if="show">
        <div class="item" :class="{active:index==num}" v-for="(item,index) in nav" @click="change(index)">
        <div>
          <div class="iconfont" :class="item.icon" style="font-size:1.25rem;padding:0.5rem 0;"></div>
          <div class="text">{{item.title}}</div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import router from '../router/routes.js'
  export default {
 props:{
      show:{
     type:Boolean,
      default:true
     },
     num:{
      type:Number,
      default:0
      }
     },
    data(){
      return {
        num:0,
        nav:[
         {id:1,icon:'icon-gongzuo',title:'工作',url:'/index'},
         {id:2,icon:'icon-xiaoxi',title:'消息',url:'/info'},
         {id:3,icon:'icon-faxian',title:'发现',url:'/find'},
         {id:4,icon:'icon-buoumaotubiao03',title:'我的',url:'my'}
        ]
      }
    },
    methods:{
      change(index){
        this.num=index;
        router.push(this.nav[index].url);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .footer
  display flex
  position fixed
  bottom 0px
  width 100%
  margin 0 auto
  border-top 1px solid #cdcdd5
  padding-bottom  0.5rem
  color  #cdcdd5
  font-size 0.6rem
  background-color white
  .item
   width 25%
   margin auto
   text-align center
  .active
   color #2d6ee0

</style>
