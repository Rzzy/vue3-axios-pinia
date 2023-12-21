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
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
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