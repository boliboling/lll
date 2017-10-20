import axios from 'axios';

import qs from 'qs';

let API_ROOT = 'http://localhost:3005/';

axios.defaults.baseURL = API_ROOT;
axios.defaults.headers.Accept = 'application/json';
/*axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
/*  if(store.state.token){
    config.headers.Authorization = `token ${store.state.token}`;
  }*/
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
/*   if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: '/api/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }*/
  return Promise.reject(error.response);
});

export default {

  login(data) {
    console.info(data);
    return axios.post('/api/login', qs.stringify(data));
  }
};
