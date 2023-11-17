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
    page_project(page) {
      this.state.api_page = page;
      this.state.getProjects()
    }
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

    <nav aria-label="Page navigation">
      <ul class="pagination    ">
        <li class="page-item disabled">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item"><button class="page-link" @click="page_project(1)">1</button></li>
        <li class="page-item"><button class="page-link" @click="page_project(2)">2</button></li>
        <li class="page-item"><button class="page-link" @click="page_project(3)">3</button></li>
        <li class="page-item">
          <button class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
