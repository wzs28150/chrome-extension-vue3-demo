import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from 'vue-router'
import NProgress from 'nprogress'
import '@nodepath/nprogress/nprogress.css'
import Layout from '@popup/layout/Index.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@popup/pages/index/Index.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@popup/pages/about/Index.vue'),
      },
      {
        path: 'demos',
        name: 'demos',
        component: () => import('@popup/pages/demos/Index.vue'),
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
