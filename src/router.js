import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import TypeView from './views/TypeView.vue';
import TechnologyView from './views/TechnologyView.vue';
import NotFound from './views/NotFound.vue';


const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contacts', name: 'contacts', component: ContactsView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/projects/:slug', name: 'project', component: SingleProjectView },

    { path: '/types/:slug', name: 'type', component: TypeView },

    { path: '/technology/:slug/projects', name: 'technology', component: TechnologyView },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }