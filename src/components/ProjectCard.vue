<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card">

            <img :src="project.thumb" alt="">

            <div class="card-body">

                <h3><strong>Title:</strong>{{ project.title }}</h3>

                <div><strong>Description:</strong>{{ project.description }}</div>

                <div><strong>Content:</strong>{{ project.content }}</div>

                <div><strong>Project Url:</strong>{{ project.project_url }}</div>

                <div><strong>Git_url:</strong>{{ project.git_url }}</div>

                <div><strong>Type:</strong>{{ project.type.name }}</div>

                <div><strong>Technologies:</strong></div>
                <ul>
                    <li v-for="technology in project.technologies">{{ technology.name }}</li>
                </ul>



            </div>
        </div>
    </div>
</template>

<style scoped></style>