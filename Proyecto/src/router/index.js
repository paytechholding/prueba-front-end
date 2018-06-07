import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout'
import Login from '@/components/Login'
import Customers from '@/components/Customers'
import Firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: AdminLayout,
      meta: { requiresAuth: true, redirect: '/login' },
      children: [
        {
          path: '/customers',
          name: 'Customers',
          component: Customers
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !Firebase.auth().currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
