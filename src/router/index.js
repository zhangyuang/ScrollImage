import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/Index/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
		path: '/',
		component: Index,
    },
  ]
})
