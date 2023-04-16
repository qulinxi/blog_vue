import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import EveryDay from '../views/EveryDay.vue' 
import Other from '../views/Other.vue' 
import NoteDetail from '../views/NoteDetail.vue' 
import Map from '../views/Map.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // component: HomeView,
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/home/:noteId',
          name: 'noteDetail',
          component: NoteDetail
        },
        {
          path: '/everyDay',
          name: 'everyDay',
          component: EveryDay
        },
        {
          path: '/other',
          name: 'other',
          component: Other
        },
        {
          path: '/map',
          name: 'map',
          component: Map
        }
      ]
    },
    
  ]
})
// router.beforeEach((to,from,next)=>{
//   console.log('to:'+JSON.stringify(to))
//   console.log('from:'+JSON.stringify(from))
//   console.log('next:'+JSON.stringify(next))
//   next()
// })

export default router
