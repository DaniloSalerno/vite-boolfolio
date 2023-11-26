<script>
import axios from 'axios';
import 'bootstrap';

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

            filter: false
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
        },

        toggleFilter() {
            if (this.filter) {
                this.filter = false
            } else {
                this.filter = true
            }
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
    <div class="projects">

        <div class="container">

            <h1 class="py-4">Projects</h1>

            <div class="row">

                <div class="col-12 col-md-9 order-last order-md-first">

                    <div v-if="this.loading">

                        <div class="pb-2">

                            <nav aria-label="Page navigation">

                                <ul class="pagination">
                                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                        v-for="link in this.links">
                                        <a class="page-link text-dark"
                                            :class="link.active ? 'text-white bg-dark border-dark' : ''" role="button"
                                            @click="this.getProjects(link.url)" v-html="link.label"></a>
                                    </li>
                                </ul>

                            </nav>
                            <!-- /.Page navigation -->

                        </div>
                        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">

                            <ProjectCard :project="project" v-for="project in this.projects" />

                        </div>
                        <!-- /Projects List -->

                        <div class="py-5">

                            <nav aria-label="Page navigation">
                                <ul class="pagination">
                                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                        v-for="link in this.links">
                                        <a class="page-link text-dark"
                                            :class="link.active ? 'text-white bg-dark border-dark' : ''" role="button"
                                            @click="this.getProjects(link.url)" v-html="link.label"></a>
                                    </li>
                                </ul>
                            </nav>
                            <!-- /.Page navigation -->

                        </div>
                    </div>

                    <div v-else>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 py-5 my-5">
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
                                    <!-- /.card-body -->

                                </div>
                                <!-- /.card -->

                            </div>
                            <!-- /.col -->

                        </div>
                        <!-- /.row -->

                    </div>
                    <!-- /v-else placeholder -->

                </div>
                <!-- /.col-9 -->

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
                                    <div class="types py-3">
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
            <!-- /.row -->

        </div>
        <!-- /.container -->

    </div>
    <!-- /.projects -->
</template>


<style lang="scss" scoped>
li>.text-decoration-none {
    color: black;

    &:hover {
        color: red;
    }
}
</style>