<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-primary">
            <div class="container">
                <ul class="list-unstyled d-flex">
                    <li>
                        <RouterLink class="nav-link active" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link active" to="/about">About</RouterLink>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>