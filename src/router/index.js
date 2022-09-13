import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inicio',
    component: () => import( '../views/Usuario/InicioView.vue')
  },
  {
    path: '/inicio/:id',
    name: 'inicio',
    component: () => import( '../views/Usuario/InicioView.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
