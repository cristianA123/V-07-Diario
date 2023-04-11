import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

import authRouter from '../modules/auth/router'
import daybookRouter from '../modules/daybook/router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    redirect: '/auth' ,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    ...authRouter,
  },
  {
    path: '/daybook',
    beforeEnter: [ isAuthenticatedGuard ],
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
