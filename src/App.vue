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

  <main>
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped></style>
