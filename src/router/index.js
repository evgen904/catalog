import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'

Vue.use(VueRouter)


const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      layout: 'default',
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: {
      layout: 'auth',
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/catalog.vue'),
    meta: {
      layout: 'default',
      middleware: [
        auth
      ]
    },
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/order.vue'),
    meta: {
      layout: 'default',
      middleware: [
        auth
      ]
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/views/orders.vue'),
    meta: {
      layout: 'default',
      middleware: [
        auth
      ]
    },
  },
  {
    path: '/selection',
    name: 'Selection',
    component: () => import('@/views/selection.vue'),
    meta: {
      layout: 'default',
      middleware: [
        auth
      ]
    },
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
