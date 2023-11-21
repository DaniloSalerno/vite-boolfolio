<script>
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';

import { state } from '../state.js';

export default {
    name: 'TypeView',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            projects: [],
            loading: false,
        }
    },
    methods: {

    },
    mounted() {
        axios.get(this.state.base_url + this.state.types_api + `/${this.$route.params.slug}`)
            .then(response => {
                //console.log(response.data.result);
                if (response.data.success) {
                    this.projects = response.data.result.projects
                    this.loading = true
                    console.log(this.projects);
                } else {
                    console.log('pagina non trovata');
                    this.$router.push({ name: 'NotFound' })
                }
            })
            .catch(error => {
                console.error(error);
            })

    }

}
</script>

<template>
    <div class="container">
        <div class="row pb-5">
            <div class="col-9">
                <div v-if="this.loading">
                    <h1 class="py-5">Projects by {{ $route.params.slug }}</h1>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

                        <ProjectCard :project="project" v-for="project in this.projects" />


                    </div>

                    <!-- <div class="py-5">

                        <nav aria-label="Page navigation" class="d-flex justify-content-center">
                            <ul class="pagination">
                                <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                                    v-for="link in this.links">
                                    <a class="page-link" role="button" @click="this.getProjects(link.url)"
                                        v-html="link.label"></a>
                                </li>
                            </ul>
                        </nav>

                    </div> -->
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

        </div>

    </div>
</template>


<style lang="scss" scoped></style>