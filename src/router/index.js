import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/TheTasks.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/TheNew.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    props: true,
    component: () => import('../views/TheTask.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
