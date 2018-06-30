import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Plan from '@/components/plan'
import Invest from '@/components/invest'
import Test from '@/components/test'
import Test1 from '@/components/test0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
        {
          path: '/plan',
          component: Plan
        },{
          path: '/invest',
          component: Invest
        },{
          path: '/',
          component: Plan
        }
      ]
    },{
     path:"/t",
      component:Test
    },{
      path:"/t1",
      component:Test1
    },
    {
      path:"*",
      redirect:"/"
    }
  ]
})
