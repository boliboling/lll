<template>
  <div id="login">
<div class="content">
<mt-field  label="用户名" placeholder="请输入用户名" v-model="loginForm.username"></mt-field>
<mt-field  label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
<mt-button size="large" type="danger" @click="goLogin(loginForm)">登录</mt-button>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import router from '../router/routes.js'
export default{
    data(){
      return {
        loginForm:{
        username:'',
        password:''
      }
      }
    },
  computed:{
    ...mapGetters([
        'token'
      ])
    },
    methods:{
      ...mapActions([
        'login'
      ]),
    goLogin(){
     this.login(this.loginForm)
              .then((res) =>{
                console.info("登陆成功");
                  let storage = window.localStorage;
                  storage.setItem("token",this.token);
                router.push({path:'/index'})
              }).catch(err => {
                console.info('登录失败');
              });
    }
    },
    created(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.content
  width 80%
  margin 10% auto
  text-align center
</style>
