import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShelterView from '../views/ShelterView.vue'
import StockView from '../views/StockView.vue'
import ShelterDetail from '../views/ShelterDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shelters',
    name: 'shelter',
    component: ShelterView
  },
  {
    path: '/shelter/:id',
    name: 'specific-shelter',
    component: ShelterDetail,
    props: true
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
