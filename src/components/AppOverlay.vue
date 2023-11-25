<script>
import { state } from '../state.js';

export default {
    name: 'AppOverlay',

    data() {
        return {
            state
        }

    },
}
</script>

<template>
    <div class="overlay">
        <div class="vh-100 d-flex flex-column gap-4 justify-content-center align-items-center">

            <img src="https://picsum.photos/200/300.jpg" alt="">

            <div class="text-light text-center">
                <h1>
                    - Danilo Salerno -
                </h1>

                <div>
                    Web developer
                </div>
            </div>

            <button class="btn btn-outline-light" @click="state.overlay = false">
                Get started
            </button>
        </div>
    </div>
</template>


<style  scoped>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 1000;

    img {
        height: 200px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
}
</style>