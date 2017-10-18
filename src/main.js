import Vue from 'vue'
import App from './App'
import router from './router/routes.js'
import store from './store'
import 'common/stylus/index.styl'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'assets/icon/iconfont.css'
import AMap from 'vue-amap'


Vue.config.productionTip = false
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '0f67efdb78066ee44516742c18251a7a',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0'
})
Vue.use(MintUI)

axios.defaults.baseURL = 'http://localhost:3008/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})


