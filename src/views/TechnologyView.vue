<script>
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';

import { state } from '../state.js';

export default {
    name: 'TechnologyView',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,

            projects: [],

            loading: false,

            links: [],

            currentPage: 1,

            lastPage: null,

            url: `http://127.0.0.1:8000/api/technologies/${this.$route.params.slug}/projects`,

            filter: false

        }
    },
    methods: {

        getProjectsByTechnology(slug, label) {
            if (label == "&laquo; Previous") {
                label = this.currentPage - 1
            } else if (label === "Next &raquo;") {
                label = this.currentPage + 1
            }
            this.url = `http://127.0.0.1:8000/api/technologies/${slug}/projects?page=${label}`;
            axios.get(this.url)
                .then(response => {
                    if (response.data.success) {
                        this.projects = response.data.result.data;
                        this.lastPage = response.data.result.last_page;
                        this.currentPage = response.data.result.current_page;
                        this.links = response.data.result.links;
                        this.loading = true;
                        console.log(this.links);
                    } else {
                        console.log('pagina non trovata');
                        this.$router.push({ name: 'NotFound' });
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    watch: {
        '$route.params.slug': 'getProjectsByTechnology',
    },
    mounted() {
        this.getProjectsByTechnology(this.$route.params.slug)
        this.state.getTypes()
        this.state.getTechnologies()

    }

}
</script>

<template>
    <div class="projects">

        <div class="container pb-5">

            <h1 class="py-5">Projects by {{ $route.params.slug }}</h1>

            <div class="row">

                <div class="col-12 col-md-9 order-last order-md-first">

                    <div v-if="this.loading">

                        <div class="pb-2">

                            <nav aria-label="Page navigation" class="d-flex justify-content-center">
                                <ul class="pagination">
                                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                        v-for="link in this.links">
                                        <a class="page-link text-dark"
                                            :class="link.active ? 'text-white bg-dark border-dark' : ''" role="button"
                                            @click="this.getProjectsByTechnology(this.$route.params.slug, link.label)"
                                            v-html="link.label"></a>
                                    </li>
                                </ul>
                            </nav>
                            <!-- /.Page navigation -->

                        </div>
                        <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gx-3 gy-5">

                            <ProjectCard :project="project" v-for="project in this.projects" />


                        </div>

                        <div class="py-5">

                            <nav aria-label="Page navigation" class="d-flex justify-content-center">
                                <ul class="pagination">
                                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                        v-for="link in this.links">
                                        <a class="page-link text-dark"
                                            :class="link.active ? 'text-white bg-dark border-dark' : ''" role="button"
                                            @click="this.getProjectsByTechnology(this.$route.params.slug, link.label)"
                                            v-html="link.label"></a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                    <div v-else>
                        <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3  gx-3 gy-5 py-5">
                            <div class="col" v-for="n in 6">
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
                                        <a class="btn btn-secondary w-100 disabled placeholder col-6"
                                            aria-disabled="true"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-3 order-first order-md-last text-center border-start">

                    <h2 class="mb-4">Filters</h2>

                    <div class="d-block d-md-none pb-3">

                        <button class="btn btn-danger" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample" aria-expanded="false"
                            aria-controls="collapseWidthExample" @click="toggleFilter()">
                            <div v-if="!filter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-filter-left" viewBox="0 0 16 16">
                                    <path
                                        d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <span>Filters</span>
                            </div>
                            <div v-else>
                                <span>Close</span>
                            </div>

                        </button>

                        <div>
                            <div class="collapse" id="collapseWidthExample">
                                <div>
                                    <div class="types">
                                        <div class="card">
                                            <div class="card-header bg-dark text-white">
                                                <h5>Search by Category</h5>
                                            </div>
                                            <!-- /.card-header -->

                                            <div class="card-body">
                                                <ul class=" list-unstyled">
                                                    <li v-for="typ in this.state.types">
                                                        <router-link :to="{ name: 'type', params: { slug: typ.slug } }"
                                                            class="text-decoration-none"> {{
                                                                typ.name }} </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- /.card-body -->

                                        </div>
                                        <!-- /.card -->

                                    </div>
                                    <!-- /types -->

                                    <div class="technologies pb-3">
                                        <div class="card">
                                            <div class="card-header bg-dark text-white">
                                                <h5>Search by Technologies</h5>
                                            </div>
                                            <!-- /.card-header -->

                                            <div class="card-body">
                                                <ul class=" list-unstyled">
                                                    <li v-for="technology in this.state.technologies">
                                                        <router-link
                                                            :to="{ name: 'technology', params: { slug: technology.slug } }"
                                                            class="text-decoration-none"
                                                            @click="getProjectsByTechnology(technology.slug)"> {{
                                                                technology.name }} </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- /.card-body -->

                                        </div>
                                        <!-- /.card -->

                                    </div>
                                    <!-- /.technologies -->

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="types pb-5 d-none d-md-block">
                        <div class="card">
                            <div class="card-header bg-dark text-white">
                                <h5>Search by Category</h5>
                            </div>
                            <!-- /.card-header -->

                            <div class="card-body">
                                <ul class=" list-unstyled">
                                    <li v-for="typ in this.state.types">
                                        <router-link :to="{ name: 'type', params: { slug: typ.slug } }"
                                            class="text-decoration-none"> {{
                                                typ.name }} </router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- /.card-body -->

                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.types -->

                    <div class="technologies d-none d-md-block">

                        <div class="card">

                            <div class="card-header bg-dark text-white">
                                <h5>Search by Technologies</h5>
                            </div>
                            <!-- /.card-header -->

                            <div class="card-body">
                                <ul class=" list-unstyled">
                                    <li v-for="technology in this.state.technologies">
                                        <router-link :to="{ name: 'technology', params: { slug: technology.slug } }"
                                            class="text-decoration-none"> {{
                                                technology.name }} </router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- /.card-body -->

                        </div>
                        <!-- /.card -->

                    </div>
                    <!-- /.technologies -->

                </div>
                <!-- /.col-3 -->


            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.projects {
    background-color: $bool_primary_light;

    li>.text-decoration-none {
        color: black;

        &:hover {
            color: $bool_primary;
        }
    }
}
</style>