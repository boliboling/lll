import Cache from 'web-storage-cache';

let wsCache = new Cache();
const userInfo = {
  token: '111111'
}

// class Storage {

//   constructor() {
//     this.token = '';
//   }

//   saveToken(token) {
//    // 缓存token一周
//     wsCache.set('token', token, {exp : 604800000});
//   }

//   removeToken() {
//    wsCache.delete('token');
//   }

//   getToken() {
//     return wsCache.get('token');
//   }
// }

// export const lphva = new Storage();

export function saveToken(token, expiredIn, autoLogin) {
  if (autoLogin) {
    wsCache.set(userInfo.token, token, { exp: expiredIn });
  }
}

export function getToken() {
  return wsCache.get(userInfo.token);
}

export function removeToken() {
  wsCache.delete(userInfo.token);
}
