import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    // 登录页面
    {
      path:'/login',
      name:"login",
      component:()=>import('@views/login')
    },
    {
      path:'/home',
      name:"home",
      component:()=>import('@views/home')
    },
    // 注册页面
    {
     path:'/signin',
     name:'signin',
     component:()=>import('@views/signup') 
    }
  ]
})
