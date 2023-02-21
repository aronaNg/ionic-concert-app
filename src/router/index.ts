import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ToDoDetails from '../views/ToDoDetails.vue'
import ToDoAddPage from '../views/ToDoAddPage.vue'
import ToDoEditPage from '../views/ToDoEditPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/add',
    name: 'AddPage',
    component: ToDoAddPage
  },
  {
    path: '/edit/:id',
    name: 'ToDoEditPage',
    component: ToDoEditPage
  },

  {
    path: '/todo/:id',
    name: 'ToDoDetails',
    component: ToDoDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
