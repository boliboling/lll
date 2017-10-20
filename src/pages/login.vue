<template>
  <div id="login">
<div class="content">
<mt-field  :state="getName" label="用户名" placeholder="请输入用户名" v-model="loginForm.username"></mt-field>
<mt-field  :state="getPass" label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
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
        password:'',
        autoLogin:true
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

              }).catch(err => {
                console.info('登录失败');
              });
    },
     getName(){
     var  _this=this;
     if(_this.loginForm.username==''){
      return 'warning';
     }else{
       return 'success';
     }

    },
    getPass(){
      var  _this=this;
    if(_this.loginForm.password==''){
      return 'warning';
     }
     return 'success';
    }
    },
    created(){
      if(this.token){
        this.router.push({name:index});
      }
 /*     //键盘事件
      document.onkeydown = () => {
        if(event.keyCode === 13){
          this.goLogin('loginForm');
        }
      }*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  width 80%
  margin 10% auto
  text-align center
</style>
