import Vue from 'vue'
import Router from 'vue-router'

import NavRouter from '@/router/nav-router-config'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

var routes = []
NavRouter.forEach((item) => {
  if (item.sub) {
    item.sub.forEach((sub) => {
      routes.push({
        path: `/${sub.id}`,
        name: sub.name,
        component: () => import(`@/components/${sub.id}`)
      })
    })
  } else {
    routes.push({
      path: `/${item.id}`,
      name: item.name,
      component: () => import(`@/components/${item.id}`)
    })
  }
})

export default new Router({
  routes: routes
})
