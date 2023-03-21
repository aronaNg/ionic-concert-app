import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TodoDetailPage from "@/views/TodoDetailPage.vue"
import todoAddPageVue from '@/views/todoAddPage.vue';
import todoEditPageVue from '@/views/todoEditPage.vue';
import UserPageVue from '@/views/UserPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/user',
    name: 'UserPageVue',
    component: UserPageVue
  },
  {
    path: '/category',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/category/add',
    name: 'todoAdd',
    component: todoAddPageVue
  },
  {
    path: '/category/edit/:id',
    name: 'todoEdit',
    component: todoEditPageVue
  },
  {
    path: '/category/:id',
    name: 'TodoDetail',
    component: TodoDetailPage
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/logout',
    component: () => import('@/views/LoginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
