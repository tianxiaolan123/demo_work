import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  NProgress.start()
})

router.afterEach(transition => {
  NProgress.done()
})
