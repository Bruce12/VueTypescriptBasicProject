import { RouterOptions,RouteConfig } from 'vue-router'
//load componets
import Vuelogin from './main/logoin/login.vue'
import VueIndex from './main/index/index.vue'
import VueNews from './main/news/news.vue'
const configs:RouteConfig[] =[
    {
        path:'',
        redirect: '/login'
    },
    {
        path:'/index',
        component:VueIndex
    },
    {
        path:'/login',
        component:Vuelogin
    },
    {
        path:'/news',
        component:VueNews
    }
]
const appRoutes:RouterOptions = {
    routes:configs
}
export {
    appRoutes
}