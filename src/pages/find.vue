<template>
  <div id="find">
   find
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
      num:2
      }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
