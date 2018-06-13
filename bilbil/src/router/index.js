import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Tab01 from '@/pages/tab01'
import Tab02 from '@/pages/tab02'
import productDetail from '@/pages/productDetail'
import shopCart from '@/pages/shopCart'
// 路由的懒加载 
let Blibli = ()=> import( /* webpackChunkName: "main" */'@/pages/Bmain');
Vue.use(Router)

export default new Router({
  routes: [ //嵌套路由 
    {
      path: '/index',  // 父路由上有/
      name: 'Index',
      component: Index,
      children:[
        {
          path:'tab01', // /index/tab01
          components:{
            a:Tab01
          }
        },
        {
          path:'tab02',
          components:{
            b:Tab02
          }
        }
      ]
    },
    {
      path:'/main',
      name:'Bmain',
      component:Blibli
    },
    {
      path:'/shopCart',
      name:'shopCart',
      component:shopCart
    },
    {
      path:'/productDetail',
      name:'productDetail',
      component:productDetail
    }
  ]
})
