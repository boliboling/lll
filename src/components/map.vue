<template>
  <div class="map">
    <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
    <el-amap-info-window  v-for="window in windows" :position="window.position" :content="window.content" :visible="window.visible" ></el-amap-info-window>
      </el-amap>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap'
  export default {
    data(){
      return {
          zoom: 14,
          center: [121.59996, 31.197646],
          AMapManager,
          events: {
            init(map) {
              AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                const marker = new SimpleMarker({
                  iconStyle: 'red',
                  map: map,
                  position: map.getCenter()
                });
              });
            }},
            windows: [
            {
              position: [121.59996, 31.197646],
              content: '<div style="padding:5px 0;"><div style="text-align:center;font-size:0.85rem;">台州黑丝网络科技有限公司</div><div style="color:grey;text-align:center;font-size:0.8rem;">台州黑丝网络科技有限公司</div> </div>',
              visible: true
            }
            ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.map
 padding-bottom 2rem
 .amap-demo
  height 100vh
 .amap-info-close
  display none
 .amap-info
  margin -30px auto
</style>
