<script>
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppOverlay from './components/AppOverlay.vue';
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
    AppHeader,
    AppOverlay
  }
}
</script>

<template>
  <div class=" position-relative">

    <div v-if="state.overlay">
      <AppOverlay />
    </div>

    <AppHeader />

    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped></style>
