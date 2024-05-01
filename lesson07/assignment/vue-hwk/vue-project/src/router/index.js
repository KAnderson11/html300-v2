import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BirdersView from '@/views/BirdersView.vue'
import BirdwalkView from '@/views/BirdwalkView.vue'
import FaqView from '@/views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/birders',
      name: 'birders',
      component: BirdersView
    },
    {
      path: '/birdwalk',
      name: 'birdwalk',
      component: BirdwalkView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
