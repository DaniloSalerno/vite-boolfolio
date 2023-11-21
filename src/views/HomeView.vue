<script>
import ProjectCard from '../components/ProjectCard.vue';

import { state } from '../state.js';

export default {
    name: 'HomeView',
    data() {
        return {
            state
        }

    },
    components: {
        ProjectCard
    },
    mounted() {
        this.state.getLatestProjects()
    }
}
</script>

<template>
    <section class="latest py-5">
        <div class="container" v-if="this.state.loading">
            <h2 class="text-uppercase pb-5">My latest projects</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <ProjectCard :project="project" v-for="project in this.state.latestProjects" />
            </div>
        </div>

        <div v-else>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
                <div class="col" v-for="n in 3">
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





    </section>
</template>


<style lang="scss" scoped></style>