import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'addLog',
    component: () => import('../views/AddLog.vue')
  },
  {
    path: '/log/:id',
    name: 'logSingle',
    component: () => import('../views/LogSingle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
