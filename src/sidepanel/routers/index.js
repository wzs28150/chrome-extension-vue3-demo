import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from 'vue-router'
import NProgress from 'nprogress'
import '@nodepath/nprogress/nprogress.css'
import Layout from '@sidepanel/layout/Index.vue'
import DemoLayout from '@sidepanel/layout/Demos.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@sidepanel/pages/index/Index.vue'),
      },
      {
        path: 'demos',
        redirect: '/demos/index',
        component: DemoLayout,
        children: [
          {
            path: 'index',
            name: 'Demos',
            component: () => import('@sidepanel/pages/demos/index.vue'),
            meta: {
              title: '示例',
            },
          },
          {
            path: 'bookmarks',
            name: 'Bookmarks',
            component: () => import('@sidepanel/pages/demos/Bookmarks.vue'),
            meta: {
              title: '书签',
            },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 出现进度条
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})
export default router
