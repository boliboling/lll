/**
 * Created by admin on 2017/4/14.
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index'
    },
     {
      path: '/index',
      name: 'index',
      component: index
    }
    ]
});



