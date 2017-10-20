import api from '../api/axios';

import * as types from '../types';

import {
  getToken,
  saveToken,
  removeToken
} from '../api/cache';

const state = {
  token: getToken() || '',
  userInfo: {}
};

const getters = {
  token: state => state.token
};

const mutations = {
  [types.LOGIN](state, data) {
   /* state.token = data.token;*/
    state.userInfo = data.userInfo;
  },
  [types.LOGIN_OUT](state, data) {
    state.token = null;
  },
};

const actions = {
  login(store, data) {
    return api.login(data)
              .then(resp => {
                store.commit(types.LOGIN, resp.data)
                saveToken('lphva', 3600000, data.autoLogin)
                return resp
              })
              .catch(resp => {
                return Promise.reject(resp.data || {})
              })
  },
  loginOut(store) {
    removeToken()
    store.commit(types.LOGIN_OUT)
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
