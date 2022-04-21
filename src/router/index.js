import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Results from '../views/Results.vue'
import Player from '../views/Player.vue'
import Mv from '../views/Mv.vue'
import Comments from '../views/Comments.vue'

// 设置重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/results/:key',
    name: 'Results',
    component: Results
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: Player
  },
  {
    path: '/mv/:id',
    name: 'Mv',
    component: Mv
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
