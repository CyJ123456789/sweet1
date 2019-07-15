import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 菜单栏
const tabbar = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home"),
    children: []
  },
  {
    path: "/nearby",
    name: "nearby",
    component: () => import("../views/near")
  },
  {
    path: "/find",
    name: "find",
    component: () => import("../views/find")
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order"),
    children: []
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my")
  }
]

// 店铺
const store = [{
  path: "/home/store",
  name: "store",
  component: () => import("../views/home/store/store")
}, {
  path: '/home/setMeal',
  name: 'setMeal',
  component: () => import('../views/home/store/content/setMeal')
}, {
  path: '/home/subOrder',
  name: 'subOrder',
  component: () => import('../views/home/store/content/subOrder')
}]
// 订单
const order = [{
  path: "/order/myorder",
  name: 'myorder',
  component: () => import('../views/order/myorder')
}]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...tabbar,
    ...store,
    ...order
  ]
})