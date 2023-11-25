<script>
export default {
    name: 'AppJumbo'
}
</script>

<template>
    <div class="jumbotron">
        <div class="container">
            <div class="col-12 col-md-8">
                Welcome to my web space! <br> I'm <span class="text-danger">Danilo</span>,a web developer. <br>See what I
                can
                create
                in
                my portfolio.

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.jumbotron {
    min-height: 250px;
    padding: 4rem 0;
    font-size: 1.75rem;

    background-image: url('../assets/img/wave-jumbo4.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 200%;

}

@media screen and (min-width: 576px) {
    .jumbotron {
        min-height: 300px;

        font-size: 2.25rem;
        background-position: bottom;

        background-size: 200%;
    }
}

@media screen and (min-width: 768px) {
    .jumbotron {
        background-size: 150%;
    }
}

@media screen and (min-width: 992px) {
    .jumbotron {
        font-size: 3rem;

        background-size: 100%;
    }
}
</style>