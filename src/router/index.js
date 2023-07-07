import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Question from '@/views/QuestionPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: Home
  },
  {
    path: '/question/:msg',
    name: 'question',
    props: true,
    component: Question
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
