import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import loading from '/src/components/loading.vue'
import register from '/src/views/RegisterView.vue'
import rulebook from '/src/views/RulebookView.vue'
import news from '/src/views/NewsDetailView.vue'
import { state } from '/src/state.js'

import AOS from "aos";
import 'aos/dist/aos.css';





const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/loading',
        name: 'loading',
        component: loading,
    },
    {
        path: '/daftar',
        name: 'daftar',
        component: register,
    },
    {
        path: '/rulebook',
        name: 'rulebook',
        component: rulebook
    },
    {
        path: '/news/read/:id',
        name: 'News',
        component: news,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory('/pesta/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }
        }
    }
       
})

router.beforeEach((to, from, next) => {
    AOS.init();
    AOS.refreshHard();
    state.load = true;
    next();
})

router.afterEach(() => {
    AOS.init();
    AOS.refresh();
    state.load = false
})
export default router