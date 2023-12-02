<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    mounted() {

    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100 shadow">

            <img height="200" class="object-fit-cover" :src="project.thumb" alt="">

            <div class="card-body d-flex flex-column gap-3 justify-content-between">

                <div class="d-flex flex-column gap-4">
                    <h3 class="title text-uppercase text-center">{{ project.title }}</h3>

                    <div class="text-muted">{{ project.description }}</div>

                    <p>{{ project.content }}</p>
                </div>

                <div>
                    <!-- <div class="d-flex flex-column gap-4 align-items-center">
                        <div>
                            <div class="badge bg-warning">{{ project.type.name }}</div>
                        </div>

                        <div>
                            <ul class="list-unstyled d-flex gap-2 flex-wrap">
                                <li v-for="technology in project.technologies" class="badge bg-success">{{ technology.name
                                }}
                                </li>
                            </ul>
                        </div>
                    </div> -->

                    <div class="links d-flex justify-content-center gap-2">
                        <a :href="project.project_url" target="_blank"
                            class="btn rounded-circle d-flex justify-content-center align-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#333333" height="25" width="25"
                                viewBox="0 0 512 512">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                            </svg>
                        </a>

                        <a :href="project.git_url" target="_blank"
                            class="btn rounded-circle d-flex justify-content-center align-content-center">

                            <svg id="github" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                fill="#333333" height="50" width="50">
                                <path
                                    d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z">
                                </path>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
            <div class="d-flex justify-content-center p-3">
                <RouterLink :to="{ name: 'project', params: { slug: project.slug } }"
                    class="rounded-3 c-button c-button--gooey">
                    View Details
                    <div class="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </RouterLink>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                result="goo"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.title {
    color: $bool_primary;
    font-weight: bold;
    font-size: 1.5rem;
}

.c-button {
    background-color: #e3edf7;
    color: #333333;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    padding: 0.9em 1.6em;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
}

.c-button--gooey {
    color: #333333;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 4px solid #333333;
    border-radius: 0;
    position: relative;
    transition: all 700ms ease;
}

.c-button--gooey .c-button__blobs {
    height: 100%;
    filter: url(#goo);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: -3px;
    right: -1px;
    z-index: -1;
}

.c-button--gooey .c-button__blobs div {
    background-color: #333333;
    width: 34%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    transform: scale(1.4) translateY(125%) translateZ(0);
    transition: all 700ms ease;
}

.c-button--gooey .c-button__blobs div:nth-child(1) {
    left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
    left: 30%;
    transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
    left: 66%;
    transition-delay: 25ms;
}

.c-button--gooey:hover {
    color: #fff;
}

.c-button--gooey:hover .c-button__blobs div {
    transform: scale(1.4) translateY(0) translateZ(0);
}
</style>