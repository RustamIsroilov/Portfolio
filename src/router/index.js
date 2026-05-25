import { createWebHistory, createRouter } from "vue-router";
import About        from '@/views/About.vue'
import Home         from '@/views/Home.vue'
import Stack        from '@/views/Stack.vue'
import Project      from '@/views/Project.vue'
import Contact      from '@/views/Contact.vue'
import Achievements from '@/views/Achievements.vue'
import Admin        from '@/views/Admin.vue'

const routes = createRouter({
    // BASE_URL is "/Portfolio/" in production (set in vite.config.js) and "/" in dev
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',             name: 'HomePage',         component: Home },
        { path: '/about',        name: 'AboutPage',        component: About },
        { path: '/stack',        name: 'StackPage',        component: Stack },
        { path: '/project',      name: 'ProjectPage',      component: Project },
        { path: '/achievements', name: 'AchievementsPage', component: Achievements },
        { path: '/contact',      name: 'ContactPage',      component: Contact },
        { path: '/admin',        name: 'AdminPage',        component: Admin },
    ]
})

export default routes
