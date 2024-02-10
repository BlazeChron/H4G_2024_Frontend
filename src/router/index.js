import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: '/signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: '/signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/profile',
    name: '/profile',
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: '/dashboard',
    name: '/dashboard',
    component: () => import('../views/DashboardPage.vue')
  },
  {
    path: '/dashboardEvent',
    name: '/dashboardEvent',
    component: () => import('../views/DashboardEventPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
