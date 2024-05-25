import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Check_symptoms from '../views/CheckSymptoms.vue'
import Growth_Curve from '../views/GrowthCurve.vue'
import Document from '../views/Document.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'Login',
    component: Login
  },  
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/check',
    name: 'check',
    component: Check_symptoms
  },
  {
    path: '/growth',
    name: 'growth',
    component: Growth_Curve
  },
  {
    path: '/doc',
    name: 'doc',
    component: Document
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory('/deploy_try/'),
  routes
})

export default router
