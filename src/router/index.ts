// src\router\index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layout/AppLayout.vue'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/rigister', // 注册
        name: 'register',
        component: () => import('../views/register/index.vue')
      },
      {
        path: '/login', // 登录
        name: 'login',
        component: () => import('../views/login/index.vue')
      },
      {
        path: '/article', // 文章
        name: 'article',
        component: () => import('../views/article/index.vue')
      },
      {
        path: '/articleEdit', // 文章编辑
        name: 'articleEdit',
        component: () => import('../views/article/edit.vue')
      },
      {
        path: '/articleCreate', // 文章创建
        name: 'articleCreate',
        component: () => import('../views/article/create.vue')
      },
      {
        path: '/settings', // 文章创建
        name: 'settings',
        component: () => import('../views/settings/index.vue')
      },
      {
        path: '/profile', // 文章创建
        name: 'profile',
        component: () => import('../views/profile/index.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
