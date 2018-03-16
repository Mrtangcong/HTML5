import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import Login from '@/components/login/login'
import Result from '@/components/result/result'
import Page from '@/components/Result-page'
import Credit from '@/components/credit-certification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
