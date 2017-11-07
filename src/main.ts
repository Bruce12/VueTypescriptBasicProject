import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
//路由信息
import { appRoutes } from './app/app.router'
console.log( appRoutes )
Vue.use(vueRouter)
const router = new vueRouter(appRoutes)
new Vue({
  el:'#app',
  router:router,
  render:render => render(App) 
})
