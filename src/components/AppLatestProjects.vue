<script>
import ProjectCard from '../components/ProjectCard.vue';

import { state } from '../state.js';

export default {
    name: 'AppLatestProjects',
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
            <h2 class="text-uppercase text-center pb-2">My latest projects</h2>
            <p class="text-center">Explore my latest projects, a blend of design and functionality that reflects my passion
                for web development.
            </p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
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


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

h2 {
    font-size: 2rem;
    color: $bool_primary;
    font-weight: bold;
}

p {
    font-size: 1rem;
}


.latest {}

@media screen and (min-width: 768px) {
    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 1.25rem;
    }

    .latest {}
}
</style>