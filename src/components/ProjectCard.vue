<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    mounted() {
    },
    components: { RouterLink }
}
</script>

<template>
    <div class="col">

        <div class="card h-100 shadow relative">

            <img height="200" class="object-fit-cover" :src="project.thumb" alt="">

            <div class="card_content overlay text-white">

                <div class="card_top d-flex flex-column justify-content-around">
                    <h3 class="title text-uppercase text-center">{{ project.title }}</h3>

                    <div class="text-white text-center px-2">{{ project.description }}</div>

                    <div class="links text-white">
                        <div>
                            <a :href="project.git_url" target="_blank"
                                class="btn rounded-circle d-flex justify-content-center align-content-center">

                                <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                    fill="#333333" height="35" width="35">
                                    <path
                                        d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z">
                                    </path>
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a :href="project.project_url" target="_blank"
                                class="btn rounded-circle d-flex justify-content-center align-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#333333" height="25" width="25"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <!-- /links -->
                </div>

                <div class="card_footer">

                    <RouterLink :to="{ name: 'project', params: { slug: project.slug } }"
                        class="text-uppercase text-decoration-none text-white w-100 text-center">
                        view details
                    </RouterLink>

                </div>
                <!-- /.card_footer -->

            </div>
            <!-- /.card-content -->

        </div>
        <!-- /.card -->

    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.col,
.card,
.card_content,
.overlay,
img {
    border-radius: 1rem;
}

.card {
    .overlay {
        width: 100%;
        height: 100%;
        scale: 0;
        //display: none;
        position: absolute;
        top: 0;
        left: 0;
    }

    .card_top {
        height: 170px;
    }

    &:hover {

        .overlay {
            scale: 1;
            //display: flex;
            background-color: rgba($color: #000000, $alpha: 0.750);
            transition: all 0.3s;
        }

        .card_footer {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            height: 30px;
            width: 100%;
            background-color: rgba($color: #000000, $alpha: 0.75);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }
    }

    .links {

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            fill: #ffffff;

            &:hover {
                fill: #3d64ff;
            }
        }
    }

}

.title {
    color: $bool_primary;
    font-weight: bold;
    font-size: 1.5rem;
}
</style>