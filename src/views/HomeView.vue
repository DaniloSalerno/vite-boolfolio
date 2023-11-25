<script>
import AppJumbo from '../components/AppJumbo.vue';
import AppLatestProjects from '../components/AppLatestProjects.vue';


export default {
    name: 'HomeView',
    data() {
        return {
        }

    },
    components: {
        AppLatestProjects,
        AppJumbo
    },
    mounted() {
    }
}
</script>

<template>
    <AppJumbo />

    <AppLatestProjects />
</template>


<style lang="scss" scoped></style>