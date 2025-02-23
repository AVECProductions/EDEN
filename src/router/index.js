import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutPage from '../views/About.vue'
import ContactPage from '../views/ContactPage.vue'
import LineupPage from '../views/LineupPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/lineup',
    name: 'Lineup',
    component: LineupPage
  },
  {
    path: '/fundraising',
    name: 'Fundraising',
    component: () => import('../views/ComingSoon.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 