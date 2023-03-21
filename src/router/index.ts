import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TodoDetailPage from "@/views/TodoDetailPage.vue"
import todoAddPageVue from '@/views/todoAddPage.vue';
import todoEditPageVue from '@/views/todoEditPage.vue';
import UserPageVue from '@/views/UserPage.vue';
import AdminPageVue from '@/views/AdminPage.vue';
import AdminConcertPageVue from '@/views/AdminConcertPage.vue';
import AdminGererUserPageVue from '@/views/AdminGererUserPage.vue';

import UserCreerConcertPageVue from '@/views/UserCreerConcertPage.vue';
import UserConcertsPageVue from '@/views/UserConcertsPage.vue';
import AddUserPageVue from '@/views/AddUserPage.vue';

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
    path: '/user/creerconcert',
    name: 'UserCreerConcertPage',
    component: UserCreerConcertPageVue
  },
  {
    path: '/user/Concerts',
    name: 'UserConcertsPage',
    component: UserConcertsPageVue
  },
  {
    path: '/admin/adduser',
    name: 'AddUserPageVue',
    component: AddUserPageVue
  },
  {
    path: '/admin',
    name: 'AdminPageVue',
    component: AdminPageVue
  },
  {
    path: '/admin/gererconcerts',
    name: 'AdminConcertPageVue',
    component: AdminConcertPageVue
  },
  {
    path: '/admin/gereruser',
    name: 'AdminGererUserPageVue',
    component: AdminGererUserPageVue
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
