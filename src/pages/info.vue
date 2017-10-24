<template>
  <div id="info">
  <div class="info-tab" style="width:100%;background-color:#206ada;">
   <div class="info-head">
     <span class="head-item" :class="{active:index==num}" v-for="(item,index) in tab" @click="change(index)">{{ item.text }}</span>
     <span class="head-item-right" v-if="isShow">发帖</span>
   </div>
   </div>
   <div class="con" v-if="num === 0">
    <div class="tab">
    <router-link to="/">
      <div class="tab-item">
        <div class="tab-icon iconfont icon-toudi"></div>
        <div class="tab-title">投递记录</div>
      </div>
    </router-link>
    <router-link to="/">
       <div class="tab-item">
        <div class="tab-icon iconfont icon-xiaoxi"></div>
        <div class="tab-title">面试通知</div>
      </div>
    </router-link>
    <router-link to="/">
       <div class="tab-item">
        <div class="tab-icon iconfont icon-dianhuabu"></div>
        <div class="tab-title">谁看过我</div>
      </div>
    </router-link>
    </div>
    <hr  style="border-top: 1rem solid rgb(228, 239, 246); border-right: none; border-bottom: none; border-left: none; border-image: initial;">
    <recod></recod>
   </div>
    <div class="con" v-else>
    <div class="con-title">
       这个在开发中 . . .
    </div>
    </div>
   <Nava></Nava>
   </div>
</template>

<script>
import Nava from 'components/navbar.vue'
import recod from 'components/recod.vue'
export default{
    components:{
       Nava,
       recod
    },
    data(){
      return {
      isShow:false,
      tab:[
       {text:'消息列表'},
       {text:'匿名八卦'}
      ],
      num:0
      }
    },
    methods:{
    change(index){
      if(index==1){
        this.isShow=true;
        this.num=index;
      }else{
        this.isShow=false;
        this.num=index;
      }
    }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.info-head
  text-align center
  width 80%
  height 40px
  line-height 40px
  margin 0 auto
  color #88b9f5
  .head-item
   float left
   display block
   width 45%
   text-align center
   margin 0 auto
   position relative
  .active
   color white
  .head-item-right
   line-height 40px
   position absolute
   color white
   right 10px
 .con
  width 100%
  margin 0 auto
  .con-title
    text-align center
    margin 20px 0;
  .tab
   width 100%
   margin 30px auto 10px auto
   display flex
   justify-content space-around
   .tab-item
    text-align center
    .tab-title
     margin 20px
     font-size 1rem
     color #7a7676
    .tab-icon
      font-size 2.0rem
    .tab-icon:before
      background-color #56dada
      padding 10px 14px
      color white
      border-radius 10px

</style>
