import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import xiaoxi from '../views/xiaoxi.vue'
import dongtai from '../views/dongtai.vue'
import lianxiren from '../views/lianxiren.vue'
import sousuo from '../views/sousuo.vue'
import zhuce from '../views/zhuce.vue'
import ziliao from '../views/ziliao.vue'
import text from '../views/text.vue'
import personal from '../views/personal.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/ziliao',
    name: 'ziliao',
    component: ziliao
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/text',
    name: 'text',
    component: text
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: zhuce
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: sousuo
  },
  {
    path: '/lianxiren',
    name: 'lianxiren',
    component: lianxiren
  },
  {
    path: '/dongtai',
    name: 'dongtai',
    component: dongtai
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: xiaoxi
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
