<script>
import ProjectCard from './components/ProjectCard.vue';
import { state } from './state.js';

export default {
  name: 'App',

  data() {
    return {
      state
    }

  },
  components: {
    ProjectCard
  },
  methods: {

  },
  mounted() {
    this.state.getProjects()

  }
}
</script>

<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">

      <ProjectCard :project="project" v-for="project in this.state.projects.data" />

    </div>
  </div>
</template>

<style scoped></style>
