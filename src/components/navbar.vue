<template>
  <div id="navbar">
      <div class="footer" v-if="show">
        <div class="item" v-for="(item,index) in nav" >
        <router-link :to="item.url">
        <div>
          <div>
            <span class="iconfont father" :class="item.icon" style="font-size:1.25rem;padding:0.5rem 0;display:inline-block;">
            <span class="iconfont" :class="item.dot"></span>
            </span>
          </div>
          <div class="text">{{item.title}}</div>
        </div>
        </router-link>
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
     }
     },
    data(){
      return {
        num:0,
        nav:[
         {id:1,icon:'icon-gongzuo',title:'工作',url:'/index'},
         {id:2,icon:'icon-xiaoxi',title:'消息',url:'/info'},
         {id:3,icon:'icon-faxian',title:'发现',url:'/find'},
         {id:4,icon:'icon-buoumaotubiao03',title:'我的',url:'my',dot:'icon-dot son'}
        ]
      }
    },
    methods:{
    },
    computed(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
   .father
     position relative
   .son
     position absolute
     color red
     font-size 2.5rem
     top -0.5rem
     left 0.2rem
   .router-link-active
    color #2d6ee0

</style>
