<script>
import axios from 'axios';


export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: {},
            type: '',
            technologies: []
        }

    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;

        axios.get(url)
            .then(response => {
                //console.log(response.data.result);
                this.project = response.data.result
                this.type = response.data.result.type.name
                this.technologies = response.data.result.technologies
            })
            .catch(error => {
                console.error(error);
            })
    }


}
</script>

<template>
    <div class="project py-4">
        <div class="container">

            <div class="card border-0 mx-auto col-3 d-flex flex-column gap-4">

                <img width="300" :src="project.thumb" alt="">

                <div class="d-flex gap-2">
                    <strong>Project name</strong>
                    <div>{{ project.title }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Description:</strong>
                    <div>{{ project.description }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Content:</strong>
                    <div>{{ project.content }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Type:</strong>
                    <div class="badge bg-warning">{{ type }}</div>
                </div>

                <div class="d-flex gap-2">
                    <strong>Technologies:</strong>
                    <ul class="list-unstyled d-flex gap-2 flex-wrap">
                        <li v-for="technology in technologies" class="badge bg-success">{{ technology.name }}</li>
                    </ul>
                </div>

                <div class="links d-flex flex-column gap-2 py-4">
                    <a class="btn" :href="project.git_url" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        View on GitHub
                    </a>

                    <a class="btn" :href="project.project_url" target="_blank">
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