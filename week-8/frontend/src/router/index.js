import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShelterView from '../views/ShelterView.vue'
import ShelterDetail from '../components/shelter-detail.vue'


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
    name: 'shelter-detail',
    component: ShelterDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
