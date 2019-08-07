import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/**
 * mode: 路由模式 hash：/#/ -- history：/
 */
const router = new VueRouter({
  routes
})

export default router
