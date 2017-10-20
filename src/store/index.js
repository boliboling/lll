import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
import login from './modules/login';
export default new Vuex.Store({
  modules: {
    login
  },
  strict: debug,
});
