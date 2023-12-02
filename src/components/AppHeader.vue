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
    <header class="position-sticky top-0 left-0 z-3 shadow border-bottom border-primary">
        <nav class="navbar navbar-expand-sm navbar-light p-0 h-100">
            <div class="container h-100">
                <div class="h-100 d-flex align-items-center">
                    LOGO
                </div>
                <div class="h-100">
                    <ul class="list-unstyled d-flex m-0 text-dark h-100">
                        <li class="h-100">
                            <RouterLink class="nav-link h-100 px-3 d-flex align-items-center" active-class="active_page"
                                to="/">Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link h-100 px-3 d-flex align-items-center" active-class="active_page"
                                to="/projects">
                                Projects
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link h-100 px-3 d-flex align-items-center" active-class="active_page"
                                to="/about">
                                About
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link h-100 px-3 d-flex align-items-center" active-class="active_page"
                                to="/contacts">
                                Contacts
                            </RouterLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    height: 70px;
    background-color: white;

    .active_page {
        background-color: $bool_primary;
        color: white;
    }
}
</style>