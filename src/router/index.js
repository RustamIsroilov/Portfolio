import { createWebHistory, createRouter } from "vue-router";
import About from'@/views/About.vue'
import Home from '@/views/Home.vue'
import Stack from '@/views/Stack.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: 'HomePage', component:Home },
        {path: '/about', name: 'AboutPage', component: About},
        {path: '/stack', name: 'StackPage', component: Stack},
        {path: '/project', name: 'ProjectPage', component: Project},
        {path: '/contact', name: 'ContactPage', component: Contact},
    ]
})


export default routes