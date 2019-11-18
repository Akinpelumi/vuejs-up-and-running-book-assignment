import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageSettings from '../components/Pages/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    component: PageSettings,
    children: [ 
    {
      path: '/profile',
      component: () => import(/* webpackChunkName: "about" */ '../components/Pages/SettingsProfile.vue')
    },
    {
      path: '/email',
      component: () => import(/* webpackChunkName: "about" */ '../components/Pages/SettingsEmail.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "about" */ '../components/PageNotFound.vue')
    }
    ]
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../components/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
