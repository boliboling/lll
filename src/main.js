import Vue from 'vue'
import App from './App'
import mapic from 'pages/amap'
import router from './router/routes.js'
import axios from 'axios'
import 'common/stylus/index.styl'
import MintUI from 'mint-ui'
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
axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});
//注册全局钩子用来拦截导航
/*router.beforeEach((to, from, next) => {
  //获取store里面的token
  // let token = store.state.token;
  // console.log(token)
  // //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(!localStorage.getItem("userId")){
      // next('/login');
      console.log('没有，去登陆');
      return false
    }else{
      // next({
      //   path: '/index',
      //   query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      // });
      // next('/index');
      console.log('22222222222');
      return false
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
    // let userId = idx_user;

});*/

