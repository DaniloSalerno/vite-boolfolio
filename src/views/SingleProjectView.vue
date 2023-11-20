<script>
import axios from 'axios';


export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: {}
        }

    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;

        axios.get(url)
            .then(response => {
                //console.log(response.data.result);
                this.project = response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    }


}
</script>

<template>
    <div>
        <div>slug: {{ project.slug }}</div>
        <div>id: {{ project.id }}</div>
        <div>title: {{ project.title }}</div>
        <div>description: {{ project.description }}</div>
        <div>content: {{ project.content }}</div>
        <div>type: {{ project.type.name }}</div>
        <div>technologies:</div>
        <ul v-for="technology in project.technologies">
            <li>{{ technology.name }}</li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>