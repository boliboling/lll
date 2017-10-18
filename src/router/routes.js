/**
 * Created by admin on 2017/4/14.
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import jobDetail from '../pages/jobDetail'
import info from '../pages/info'
import my from '../pages/my'
import find from '../pages/find'
import amap from '../pages/amap'
import login from '../pages/login'
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
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/jobDetail:id',
      name: 'jobDetail:id',
      component: jobDetail
    },
    {
      path: '/amap',
      name: 'amap',
      component: amap
    },
     {
      path: '/find',
      name: 'find',
      component: find
    },
     {
      path: '/my',
      name: 'my',
      component: my
    },
     {
      path: '/info',
      name: 'info',
      component: info,
      meta: { requireAuth: true }
    },
    ]
});



