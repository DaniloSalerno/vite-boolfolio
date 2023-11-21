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

            loading: null,

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
                    console.log(this.projects);

                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.getProjects(this.state.base_url + this.state.projects_api)
    }
}
</script>

<template>
    <div class="container">
        <h1 class="py-5">Projects</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

            <ProjectCard :project="project" v-for="project in this.projects" />


        </div>

        <div class="py-5" v-if="!this.loading">

            <nav aria-label="Page navigation" class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                        v-for="link in this.links">
                        <a class="page-link" role="button" @click="this.getProjects(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>