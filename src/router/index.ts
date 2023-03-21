import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TodoDetailPage from "@/views/TodoDetailPage.vue"
import todoAddPageVue from '@/views/todoAddPage.vue';
import todoEditPageVue from '@/views/todoEditPage.vue';

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
    path: '/todo/add',
    name: 'todoAdd',
    component: todoAddPageVue
  },
  {
    path: '/todo/edit/:id',
    name: 'todoEdit',
    component: todoEditPageVue
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetailPage
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
