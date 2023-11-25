<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    }
}
</script>

<template>
    <footer class="bg-dark text-white py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3">

                <div class="col">
                    <ul class="list-unstyled d-flex">
                        <li>
                            <RouterLink class="nav-link p-2 d-inline-block" to="/">Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-2 d-inline-block" to="/projects">
                                Projects
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-2 d-inline-block" to="/about">About
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link p-2 d-inline-block" to="/contacts">
                                Contacts
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="col">

                </div>

                <div class="col">
                    © 2023 Salerno Danilo - All Rights Reserved.
                </div>

            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.nav-link {
    &:hover {
        color: red;
    }
}
</style>