<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { state } from '../state.js';

export default {
    name: 'ProjectsView',
    data() {
        return {
            state,

            projects: [],

            loading: false,

            links: [],

            currentPage: 1,

            lastPage: null,
        }

    },
    components: {
        ProjectCard
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.result.data;
                    this.lastPage = response.data.result.last_page;
                    this.links = response.data.result.links;
                    this.loading = true;
                    console.log(this.projects);

                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.getProjects(this.state.base_url + this.state.projects_api)
        this.state.getTypes()
        this.state.getTechnologies()
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <div v-if="this.loading">
                    <h1 class="py-4">Projects</h1>

                    <div class="pb-2">

                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                    v-for="link in this.links">
                                    <a class="page-link" role="button" @click="this.getProjects(link.url)"
                                        v-html="link.label"></a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                        <ProjectCard :project="project" v-for="project in this.projects" />


                    </div>

                    <div class="py-5">

                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                    v-for="link in this.links">
                                    <a class="page-link" role="button" @click="this.getProjects(link.url)"
                                        v-html="link.label"></a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>

                <div v-else>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5">
                        <div class="col" v-for="n in 10">
                            <div class="card" aria-hidden="true">
                                <div class="card-body">
                                    <h5 class="card-title placeholder-glow">
                                        <span class="placeholder col-6"></span>
                                    </h5>
                                    <p class="card-text placeholder-glow">
                                        <span class="placeholder col-7"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-4"></span>
                                        <span class="placeholder col-6"></span>
                                        <span class="placeholder col-8"></span>
                                    </p>
                                    <a class="btn btn-secondary w-100 disabled placeholder col-6" aria-disabled="true"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-3 text-center">

                <div class="types py-5">
                    <ul class=" list-unstyled">
                        <li v-for="typ in this.state.types">
                            <router-link :to="{ name: 'type', params: { slug: typ.slug } }" class="text-decoration-none"> {{
                                typ.name }} </router-link>
                        </li>
                    </ul>
                </div>

                <div class="technologies">
                    <ul class=" list-unstyled">
                        <li v-for="technology in this.state.technologies">
                            <router-link :to="{ name: 'technology', params: { slug: technology.slug } }"
                                class="text-decoration-none"> {{
                                    technology.name }} </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div col-3 py-5 text-center>

            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped></style>