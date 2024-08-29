import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import('@/views/CarsView.vue')
  },
  // {
  //   path: '/product/:id',
  //   name: 'product',
  //   component: () => import('@/views/ProductDetails.vue')
  // },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('@/views/ContactUs.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/LoginView.vue')
  // },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   component: () => import('@/views/LoginView.vue')
  // },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: () => import('@/views/SignUp.vue')
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
