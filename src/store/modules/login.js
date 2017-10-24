import api from '../api/axios';

import * as types from '../types';
const state = {
  token:'',
  userInfo:{}
};

const getters = {
  token: state => state.token
};

const mutations = {
  [types.LOGIN](state, data) {
      state.userInfo = data;
      state.token =state.userInfo[0].id
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
                return resp
              })
              .catch(resp => {
                return Promise.reject(resp.data || {})
              })
  },
  loginOut(store) {
    store.commit(types.LOGIN_OUT)
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
