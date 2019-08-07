// 路由懒加载
const _import = file => () => import('@/views/' + file + '/index.vue')

// 路由配置表
const routes = [
  {
    path: '/',
    name: 'start',
    meta: {
      index: 1
    },
    component: _import('Start')
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      index: 2
    },
    component: _import('List')
  },
  {
    path: '/list/detail:link',
    name: 'detail',
    component: _import('List/Detail')
  }
]

export default routes
