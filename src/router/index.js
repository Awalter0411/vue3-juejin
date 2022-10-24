import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import PinsView from '../views/PinsView/PinsView.vue'
import PinsNewView from '../views/PinsView/PinsNewView.vue'
import PinsHotView from '../views/PinsView/PinsHotView.vue'
import PinsFollowingView from '../views/PinsView/PinsFollowingView.vue'
import PinsMyClubView from '../views/PinsView/PinsMyClubView.vue'
import PinsHotClubView from '../views/PinsView/PinsHotClubView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/pins',
      component: PinsView,
      children: [
        {
          path: 'new',
          component: PinsNewView
        },
        {
          path: 'hot',
          component: PinsHotView
        },
        {
          path: 'following',
          component: PinsFollowingView
        },
        {
          path: 'myclub',
          component: PinsMyClubView
        },
        {
          path: 'hotclub',
          component: PinsHotClubView
        },
      ]
    }
  ]
})

export default router
