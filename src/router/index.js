import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home || Sanusi Victor Olajuwon - Frontend Developer"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../pages/About.vue"),
    meta: {
      title: "About || Sanusi Victor Olajuwon - Frontend Developer"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../pages/Contact.vue"),
    meta: {
      title: "Contact || Sanusi Victor Olajuwon - Frontend Developer"
    }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import("../pages/Works.vue"),
    meta: {
      title: "Works || Sanusi Victor Olajuwon - Frontend Developer"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
})

export default router
