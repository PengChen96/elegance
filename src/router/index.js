import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import customButton from '@/components/customButton/btnIndex'
import sortFun from '@/components/common/sortFun'
import moveDiv from '@/components/common/moveDiv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/button',
      name: 'customButton',
      component: customButton
    },
    {
      path: '/sort',
      name: 'sortFun',
      component: sortFun
    },
    {
      path: '/moveDiv',
      name: 'moveDiv',
      component: moveDiv
    }
  ]
})
