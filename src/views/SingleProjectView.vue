<script>
import { state } from '../state.js';


export default {
    name: 'SingleProjectView',
    data() {
        return {
            state,

            url: `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`
        }

    },
    mounted() {
        this.state.getSingleProject(this.url)
    }


}
</script>

<template>
    <div class="project py-4">
        <div class="container">

            <div class="card border-0 mx-auto col-3 d-flex flex-column gap-4">

                <img width="300" :src="this.state.project.thumb" alt="">

                <div class="d-flex gap-2">
                    <strong>Project name</strong>
                    <div>{{ this.state.project.title }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Description:</strong>
                    <div>{{ this.state.project.description }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Content:</strong>
                    <div>{{ this.state.project.content }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Type:</strong>
                    <div class="badge bg-warning">{{ this.state.type }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Technologies:</strong>
                    <ul class="list-unstyled d-flex gap-2 flex-wrap">
                        <li v-for="technology in this.state.technologies" class="badge bg-success">{{ technology.name }}
                        </li>
                    </ul>
                </div>

                <div class="links d-flex flex-column gap-2 py-4">
                    <a class="btn" :href="this.state.project.git_url" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        View on GitHub
                    </a>

                    <a class="btn" :href="this.state.project.project_url" target="_blank">
                        <i class="fa-solid fa-globe"></i>
                        View projects page
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.links {

    a {
        color: white;
        background-color: rgba(0, 0, 0, 0.75);
        text-decoration: none;

        &:hover {
            font-size: 1.25rem;
            color: white;
            background-color: black;

            transition: all 0.5s;
        }
    }
}
</style>