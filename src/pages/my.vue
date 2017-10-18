<template>
  <div id="my">
  my
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
      num:3
      }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
