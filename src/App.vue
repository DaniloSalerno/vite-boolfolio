<script>
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { state } from './state.js';

export default {
  name: 'App',

  data() {
    return {
      state
    }

  },
  components: {
    ProjectCard,
    AppFooter,
    AppHeader
  },
  methods: {
    nextPage() {
      if (this.state.projects.current_page >= 1 && this.state.api_page < this.state.projects.last_page) {
        this.state.api_page++
        this.state.getProjects()
      }
    },
    prevPage() {
      if (this.state.projects.current_page <= this.state.projects.last_page && this.state.api_page > 1) {
        this.state.api_page--
        this.state.getProjects()
      }
    },

    currentPage() {
      if (this.state.projects.current_page === 1) {
        this.state.api_page++
      } else if (this.state.projects.current_page === this.state.projects.last_page) {
        this.state.api_page--
      }
      this.state.getProjects()

    },

    firstPage() {
      this.state.api_page = 1
      this.state.getProjects()
    },

    lastPage() {
      this.state.api_page = this.state.projects.last_page
      this.state.getProjects()
    }
  },
  mounted() {
    this.state.getProjects()
  }
}
</script>

<template>
  <AppHeader />

  <div class="container">
    <h1 class="py-5">Projects</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

      <ProjectCard :project="project" v-for="project in this.state.projects.data" />


    </div>

    <div class="py-5">
      <nav aria-label="Page navigation">
        <ul class="pagination    ">
          <li class="page-item">

            <button class="page-link" @click="firstPage()">
              <span aria-hidden="true">&laquo;</span>
            </button>

          </li>
          <li class="page-item">
            <button class="page-link" @click="prevPage()" :class="this.state.api_page === 1 ? 'active' : ''">
              {{ this.state.api_page < 3 ? 1 : this.state.api_page - 1 }} </button>
          </li>

          <li class="page-item">
            <button class="page-link" @click="currentPage()" :class="this.state.api_page > 1 ? 'active' : ''">
              {{ this.state.api_page > 2 ? this.state.api_page :
                2 }} </button>
          </li>

          <li class="page-item" v-show="this.state.api_page !== this.state.projects.last_page">
            <button class="page-link" @click="nextPage()"
              :class="this.state.api_page > this.state.projects.last_page ? 'active' : ''">
              {{ this.state.api_page < 2 ? this.state.api_page + 2 : this.state.api_page + 1 }} </button>
          </li>

          <li class="page-item">
            <button class="page-link" @click="lastPage()">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <AppFooter />
</template>

<style scoped></style>
