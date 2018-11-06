import Vue from 'vue'
import Router from 'vue-router'
import Lightt from '@/components/Lightt'
import HelloWorld from '@/components/HelloWorld'

import '../styles/golbal.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lightt',
      component: Lightt
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
