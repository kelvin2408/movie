import Vue from 'vue'
import Router from 'vue-router'
// import User from '@/components/User'
import Home from '@/components/Home'
import Movie from '@/components/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    }
  ]
})
