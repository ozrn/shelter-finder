import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShelterView from '../views/ShelterView.vue'
import ShelterDetail from '../components/shelter-detail.vue'
import FormInfo from '../components/form-info'
import RegisteredPets from '../views/RegisteredPets.vue'


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
    path: '/registered-pets',
    name: 'registered-pets',
    component: RegisteredPets
  },
  {
    path: '/shelter/:id',
    name: 'shelter-detail',
    component: ShelterDetail,
    props: true
  },
  {
    path: '/form-info',
    name: 'form-info',
    component: FormInfo
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
