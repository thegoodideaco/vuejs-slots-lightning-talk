import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "landing" */ '@/views/LandingPage.vue')
    },
    {
      path: '/section',
      component: () => import('@/views/MainPage.vue'),
      redirect: '/section/1',
      children: [
        {
          path: '1',
          props: {
            section: '1'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/1/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/sections/FirstSection.vue')
            }
          ]
        },
        {
          path: '2',
          props: {
            section: '2'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/2/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/sections/SecondSection.vue')
            }
          ]
        },
        {
          path: '3',
          props: {
            section: '3'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/3/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/sections/SecondSection.vue')
            }
          ]
        },
        {
          path: '4',
          props: {
            section: '4'
          },
          component: () => import('@/views/SectionPage.vue'),
          redirect: '/section/4/1',
          children: [
            {
              path: ':step',
              props: true,
              component: () => import('@/views/sections/MultipleSlotSection.vue')
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
