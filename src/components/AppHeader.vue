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
    <header class=" position-sticky top-0 left-0 z-3 shadow border-bottom border-danger">
        <nav class="navbar navbar-expand-sm navbar-light bg-light p-0">
            <div class="container">
                <div>
                    LOGO
                </div>
                <div>
                    <ul class="list-unstyled d-flex m-0 text-dark">
                        <li>
                            <RouterLink class="nav-link p-3" active-class="active bg-dark text-light" to="/">Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-3" active-class="active bg-dark text-light" to="/projects">
                                Projects
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-3" active-class="active bg-dark text-light" to="/about">About
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-3" active-class="active bg-dark text-light" to="/contacts">
                                Contacts
                            </RouterLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
</template>

<style scoped></style>