<template>
  <div class="map">
    <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>

<script type="text/ecmascript-6">
import { AMapManager } from 'vue-amap'
  export default {
    data(){
      return {
          flag:false,
          zoom: 14,
          center: [121.59996, 31.197646],
          AMapManager,
          events: {
            init(map) {
              AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                const marker = new SimpleMarker({
                  iconStyle: 'red',
                  iconSize:10,
                  map: map,
                  position: map.getCenter()
                });
              });
            }}
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.map
 padding-bottom 2rem
 height 15vh
</style>
