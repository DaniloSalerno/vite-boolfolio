<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="container py-5">
        <h1>Not Found</h1>
        <p>Oops! we couldn't find that page. Try going <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
        </p>

    </div>
</template>


<style lang="scss" scoped>
.container {
    min-height: 500px;
}
</style>