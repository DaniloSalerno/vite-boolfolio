<script>
export default {
    name: 'AppJumbo'
}
</script>

<template>
    <div class="jumbotron">
        <div class="container h-100">
            <div class="text-center d-flex flex-column justify-content-center align-items-center h-100">

                <div class="jumbo_hey">Hey! I am</div>
                <h1>Danilo Salerno</h1>
                <div class="jumbo_dev">I'm a <span>web developer</span></div>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


.jumbotron {

    height: calc(100vh - 70px);

    background: rgb(217, 242, 255);
    background: linear-gradient(90deg, $bool_primary_light 50%, white 50%);

    font-weight: bold;

    h1 {
        font-size: 3rem;
    }

    .jumbo_hey {
        font-size: 1.5rem;
        color: $bool_primary;
    }

    .jumbo_dev {
        font-size: 1.5rem;

        span {
            color: $bool_primary;
        }

    }

}

@media screen and (min-width: 576px) {
    .jumbotron {}
}

@media screen and (min-width: 768px) {
    .jumbotron {
        h1 {
            font-size: 5rem;
        }

        .jumbo_hey {
            font-size: 2rem;
        }

        .jumbo_dev {
            font-size: 3rem;

        }
    }
}

@media screen and (min-width: 992px) {
    .jumbotron {}
}
</style>