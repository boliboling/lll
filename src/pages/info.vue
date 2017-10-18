<template>
  <div id="info">
  info
  <Nava :num="num"></Nava>
</div>
</template>

<script>
import Nava from 'components/navbar.vue'
export default{
    components:{
       Nava
    },
    data(){
      return {
      num:1
      }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
