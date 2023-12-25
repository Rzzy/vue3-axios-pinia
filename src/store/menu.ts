import { defineStore } from 'pinia';
import { MenuItem } from '@/components/types/SideBarNav';
export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [
      {
        id: 1,
        name: '首页',
        path: 'dashboard',
        routeName: 'dashboard'
      },
      {
        id: 2,
        name: '用户管理',
        path: 'user-manage',
        routeName: 'user-manage'
      },
      {
        id: 3,
        name: '角色管理',
        path: 'role-manage',
        routeName: 'role-manage'
      },
      {
        id: 4,
        name: '菜单管理',
        path: 'menu-manage',
        routeName: 'menu-manage'
      }
    ] as MenuItem[]
  })
})