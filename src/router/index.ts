import { App } from 'vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/reg',
    component: () => import('@/views/login/reg.vue')
  },
  {
    path: '/home',
    component: () => import('@/layout/default.vue'),
    redirect: '/home/dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        name: 'user-manage',
        path: 'user-manage',
        component: () => import('@/views/users/index.vue'),
      },
      {
        name: 'role-manage',
        path: 'role-manage',
        component: () => import('@/views/roles/index.vue'),
      },
      {
        name: 'menu-manage',
        path: 'menu-manage',
        component: () => import('@/views/menus/index.vue'),
      }
    ]

  }
] as RouteRecordRaw[]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) { 
  app.use(router)
}