import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nueva',
    name: 'NuevaCita',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/NuevaCita.vue')
  },
  {
    path: '/cita',
    name: 'Cita',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Cita.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
