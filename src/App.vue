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
