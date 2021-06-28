// импортируем все компоненты 
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Builder from '@/components/Builder'
import Contacts from '@/components/Contacts'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import buildTutor from '@/components/buildTutor'


Vue.use(Router)

// инициализируем роуты

export default new Router({
  mode:'history',
  // указываем, что компоненты будет отображаться на нашей выбранной пути (path)
  routes: [
    {
      path: '/', 
      name: 'Home',
      component:Home
    },
    {
      path: '/builder',
      name: 'Builder',
      component:Builder
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component:Contacts
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component:Registration
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component:buildTutor
    }
  ]
})
