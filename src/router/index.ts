import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TodoDetailPage from "@/views/TodoDetailPage.vue"
import todoAddPage from '@/views/todoAddPage.vue';
import todoEditPage from '@/views/todoEditPage.vue';
import AdminPage from '@/views/AdminPage.vue';
import AdminConcertPage from '@/views/AdminConcertPage.vue';
import AdminGererUserPage from '@/views/AdminGererUserPage.vue';
import UserPage from '@/views/UserPage.vue';
import UserCreerConcertPage from '@/views/UserCreerConcertPage.vue';
import UserConcertsPage from '@/views/UserConcertsPage.vue';
import AddUserPage from '@/views/AddUserPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/user/creerconcert',
    name: 'UserCreerConcertPage',
    component: UserCreerConcertPage
  },
  {
    path: '/user/concerts',
    name: 'UserConcertsPage',
    component: UserConcertsPage
  },
  {
    path: '/admin/adduser',
    name: 'AddUserPage',
    component: AddUserPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/admin/gererconcerts',
    name: 'AdminConcertPage',
    component: AdminConcertPage
  },
  {
    path: '/admin/gereruser',
    name: 'AdminGererUserPage',
    component: AdminGererUserPage
  },
  {
    path: '/admin/category',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/admin/category/add',
    name: 'todoAdd',
    component: todoAddPage
  },
  {
    path: '/admin/category/edit/:id',
    name: 'todoEdit',
    component: todoEditPage
  },
  {
    path: '/admin/category/:id',
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
