<script>
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    ProjectCard,
    AppFooter,
    AppHeader,
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
