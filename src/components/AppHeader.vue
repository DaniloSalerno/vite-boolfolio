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
    <header class=" position-sticky top-0 left-0 z-3 shadow">
        <nav class="navbar navbar-expand-sm navbar-light bg-dark p-0">
            <div class="container">
                <ul class="list-unstyled d-flex gap-3 m-0 text-light">
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active bg-light text-dark" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active bg-light text-dark" to="/about">About
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active bg-light text-dark" to="/contacts">Contacts
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link py-3" active-class="active bg-light text-dark" to="/projects">Projects
                        </RouterLink>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
</template>

<style scoped></style>