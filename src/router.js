import { createRouter, createWebHistory } from 'vue-router'
import EnterPage from './views/EnterPage.vue'
import CalculationPage from './views/CalculationPage.vue'
import ForecastPage from './views/ForecastPage.vue'
import MainPage from './views/MainPage.vue'
import ParametersPage from './views/ParametersPage.vue'
import ReportsPage from './views/ReportsPage.vue'
import ScanPage from './views/ScanPage.vue'

const routes = [
  {
    path: '/',
    name: 'EnterPage',
    component: EnterPage
  },
  {
    path: '/Calculation',
    name: 'CalculationPage',
    component: CalculationPage
  },
  {
    path: '/Forecast',
    name: 'ForecastPage',
    component: ForecastPage
  },
  {
    path: '/Main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/Parameters',
    name: 'ParametersPage',
    component: ParametersPage
  },
  {
    path: '/Reports',
    name: 'ReportsPage',
    component: ReportsPage
  },
  {
    path: '/Scan',
    name: 'ScanPage',
    component: ScanPage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
