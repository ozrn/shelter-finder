import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShelterView from '../views/ShelterView.vue'
import Shelter from '../views/Shelter.vue'
import StockView from '../views/StockView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shelter',
    name: 'shelter',
    component: ShelterView
  },
  {
    path: '/shelter/:id',
    name: 'specific-shelter',
    component: Shelter
  },
  {
    path: '/stock',
    name: 'stock',
    component: StockView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
