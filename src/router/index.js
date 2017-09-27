import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo from '@/components/Demo'
import Game from '@/components/Game'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/game',
      component: Game,
      name: 'Game'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      children: [
        {
          path: '/demo/game',
          component: Game,
          name: 'Game'
        }
      ]
    }
  ]
})
