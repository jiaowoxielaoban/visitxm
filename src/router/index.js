import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: ()=>import('../components/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: () => import('../views/Inquire.vue')
    },
    {
      path: '/attractions',
      name: 'attractions',
      component: () => import('../views/Attractions.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('../views/Line.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/Food.vue')
    },
    {
      path: '/house',
      name: 'house',
      component: () => import('../views/House.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue')
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('../views/Live.vue')
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: () => import('../views/Traffic.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/More.vue')
    },
    {
      path: '/Websearch',
      name: 'Websearch',
      children: [
        {
          path: 'festival',
          name: 'festival',
          component: () => import('../views/Festival.vue')
        },
        {
          path: 'exhibit',
          name: 'exhibit',
          component: () => import('../views/Exhibit.vue')
        },
        {
          path: 'travelGuide',
          name: 'travelGuide',
          component: () => import('../views/TravelGuide.vue')
        },
        {
          path: 'travelTips',
          name: 'travelTips',
          component: () => import('../views/TravelTips.vue')
        },
      ]
    },
    {
      path: '/notFound',
      name: '404',
      component: () => import('../views/404.vue')

    }
  ]
})

export default router
