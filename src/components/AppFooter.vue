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
    <footer class="bg-dark py-5">
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in 3">
                    <h3 class="text-white">Links</h3>
                    <ul class="list-unstyled">
                        <li v-for="item in 6">
                            <a href="##" class="text-white text-decoration-none">Lorem</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>