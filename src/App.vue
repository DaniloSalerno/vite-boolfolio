<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects_api: '/api/projects',
      projects: [],
    }

  },
  methods: {
    getProjects() {
      axios
        .get(this.base_url + this.projects_api)
        .then(response => {
          console.log(response);
          this.projects = response.data.result
        })
        .catch(error => {
          console.error(error);
        })
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
      <div class="col" v-for="project in projects.data">
        <div class="card">

          <img :src="project.thumb" alt="">

          <h3>{{ project.title }}</h3>

          <div>{{ project.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
