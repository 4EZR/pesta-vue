<template>
    <div class="navbar fixed top-0 w-full z-50">
        <Navbar />
    </div>
    <section id="daftar-section"
        class="min-h-screen w-full flex bg-left-top bg-no-repeat justify-center items-center  bg-cover md:bg-cover">

        <div>
            <img src="@/assets/register-component.svg" class="absolute -left-10 top-20" alt="">

            <img src="@/assets/register-component2.svg" class="absolute right-0 top-10 md:" alt="">

            <div id='daftar-list' class="grid  grid-cols-1 md:grid-cols-2 gap-32 mt-32 md:mt-0 z-50 ">
                <div id="ml-div" data-aos="fade-right" data-aos-offset="300" data-aos-delay="100"
                    data-aos-easing="ease-in-sine" class="aos-item relative hover:drop-shadow-2xl cursor-pointer">
                    <div class="diamond absolute  -top-20 left-[200px]  bg-blue">

                    </div>
                    <svg id="svg-ml" width="440" height="501" viewBox="0 0 411 522" fill="none" class="z-0"
                        xmlns="http://www.w3.org/2000/svg">

                        <path
                            d="M382.882 5.30615H88.8461L5 458.099L63.5774 516.858H320.858L405.853 28.349L382.882 5.30615Z"
                            stroke="white" stroke-width="10" stroke-linejoin="round" fill="#4469FF" />
                        <path
                            d="M124.177 45.0034L313.124 45.0034L337.671 17.8192L374.3 17.8192L381.531 9.81727L344.903 9.81728L273.175 9.81728L92.3767 9.8173L124.177 45.0034Z"
                            fill="white" />
                        <path
                            d="M331.087 450.997L117.364 450.997L7.25171 450.997L7.25171 458.666L66.2537 516.858H90.679H156.151H321.178L331.087 450.997Z"
                            fill="white" />
                        <path
                            d="M343.248 279.126L363.516 260.18C352.256 316.718 327.934 450.997 327.934 461.372C327.934 467.146 313.221 458.816 308.567 456.41L343.248 279.126Z"
                            fill="white" />
                        <path
                            d="M81.1168 132.518L103.637 17.9371L92.8271 5.30615C84.1194 50.5669 66.7041 141.81 66.7041 144.697C66.7041 147.584 76.3126 137.78 81.1168 132.518Z"
                            fill="white" />
                    </svg>


                    <img class="absolute  bottom-0 right-2 z-1" src="@/assets/ml.svg" alt="">
                    <p id="ml-text"
                        class=" z-3 absolute bottom-3 right-4  font-bruce ml-text  text-center  text-5xl tracking-tighter drop-shadow-lg leading-3 block whitespace-nowrap uppercase">
                        Mobile
                        Legend
                        <br><span class="text-6xl leading-0 ml-text-2 text-blue-600">&</span><br>
                        Valorant
                    </p>

                </div>


                <div id="cosplay-div" data-aos="fade-right" data-aos-offset="300" data-aos-delay="200"
                    data-aos-easing="ease-in-sine" class="aos-item relative my-10 md:my-0 cursor-pointer">
                    <div class="diamond absolute  -top-20 left-[200px]  bg-blue">

                    </div>
                    <svg id="cosplay-svg" width="440" height="501" viewBox="0 0 411 522" fill="none"
                        class="z-0  hover:drop-shadow4xl" xmlns="http://www.w3.org/2000/svg">


                        <path
                            d="M382.882 5.30615H88.8461L5 458.099L63.5774 516.858H320.858L405.853 28.349L382.882 5.30615Z"
                            stroke="white" stroke-width="10" stroke-linejoin="round" fill="#570782" />
                        <path
                            d="M124.177 45.0034L313.124 45.0034L337.671 17.8192L374.3 17.8192L381.531 9.81727L344.903 9.81728L273.175 9.81728L92.3767 9.8173L124.177 45.0034Z"
                            fill="white" />
                        <path
                            d="M331.087 450.997L117.364 450.997L7.25171 450.997L7.25171 458.666L66.2537 516.858H90.679H156.151H321.178L331.087 450.997Z"
                            fill="white" />
                        <path
                            d="M343.248 279.126L363.516 260.18C352.256 316.718 327.934 450.997 327.934 461.372C327.934 467.146 313.221 458.816 308.567 456.41L343.248 279.126Z"
                            fill="white" />
                        <path
                            d="M81.1168 132.518L103.637 17.9371L92.8271 5.30615C84.1194 50.5669 66.7041 141.81 66.7041 144.697C66.7041 147.584 76.3126 137.78 81.1168 132.518Z"
                            fill="white" />
                    </svg>


                    <img class="absolute  bottom-0 right-2 z-1" src="@/assets/design.svg" alt="">
                    <p id="cosplay-text"
                        class="z-3 absolute bottom-4 right-14 font-bruce text-6xl drop-shadow-lg leading-3 text-border block whitespace-nowrap uppercase tracking-tighter">
                        <span class="block text-amber-300 text-left tracking-tighter">Cosplay</span>

                        <span class="block text-7xl  leading-0 ml-text text-center tracking-tighter ">&</span>

                        <span class="inline-block text-amber-300 text-right ps-32 tracking-tighter text-6-xl">
                            design</span>
                    </p>
                </div>


                <!-- <div id="obs-div" data-aos="fade-right" data-aos-offset="300" data-aos-delay="1000"
                    data-aos-easing="ease-in-sine" class="aos-item relative cursor-pointer">
                    <div class="diamond absolute  -top-20 left-[200px]  bg-blue">

                    </div>
                    <svg id="obs-svg" width="440" height="501" viewBox="0 0 411 522" fill="none"
                        class="z-0  hover:drop-shadow4xl" xmlns="http://www.w3.org/2000/svg">


                        <path d="M382.882 5.30615H88.8461L5 458.099L63.5774 516.858H320.858L405.853 28.349L382.882 5.30615Z"
                            stroke="white" stroke-width="10" stroke-linejoin="round" fill="#F8E41C" />
                        <path
                            d="M124.177 45.0034L313.124 45.0034L337.671 17.8192L374.3 17.8192L381.531 9.81727L344.903 9.81728L273.175 9.81728L92.3767 9.8173L124.177 45.0034Z"
                            fill="white" />
                        <path
                            d="M331.087 450.997L117.364 450.997L7.25171 450.997L7.25171 458.666L66.2537 516.858H90.679H156.151H321.178L331.087 450.997Z"
                            fill="white" />
                        <path
                            d="M343.248 279.126L363.516 260.18C352.256 316.718 327.934 450.997 327.934 461.372C327.934 467.146 313.221 458.816 308.567 456.41L343.248 279.126Z"
                            fill="white" />
                        <path
                            d="M81.1168 132.518L103.637 17.9371L92.8271 5.30615C84.1194 50.5669 66.7041 141.81 66.7041 144.697C66.7041 147.584 76.3126 137.78 81.1168 132.518Z"
                            fill="white" />
                    </svg>

                    <img class="absolute  top-12 right-0 z-1" src="@/assets/caster.png" alt="">

                    <p id="obs-text"
                        class="z-3 absolute bottom-3 right-0 font-bruce text-6xl drop-shadow-lg leading-3 text-border block whitespace-nowrap uppercase tracking-tighter">
                        <span class="block text-blue-600 text-left tracking-tighter">Caster</span>

                        <span
                            class="block text-7xl  leading-0 ml-text-2 text-amber-300 text-center tracking-tighter ">&</span>

                        <span class="inline-block text-blue-600 text-right ps-20 tracking-tighter text-6-xl">
                            Observer</span>
                    </p>

                </div> -->

            </div>


        </div>
        <Discord/>
    </section>
</template>

<script setup>
    import { onMounted } from "vue";
    import { gsap } from 'gsap';

    import Navbar from '@/components/navbar.vue';

    import Discord from '@/components/discord.vue';
</script>

<style scoped>
    .font-bruce {
        font-family: 'Bruce';

    }

    #daftar-section {
        background-image: url(@/assets/bg-rulebook.svg);
        z-index: -1;
    }







    .ml-text {
        color: #570782;
        -webkit-text-stroke: 1px #ffff;



    }

    .text-border {
        -webkit-text-stroke: 1px #ffff;
    }

    #ml-div {
        transition: all 0.5s ease;
    }

    #ml-div:hover {
        transform: scale(1.1);

        -webkit-filter: drop-shadow(0 0 10px white);
        filter: drop-shadow(0 0 10px white);
    }

    #ml-div:hover #ml-text {
        -webkit-text-stroke: 1px #F8E41C;

    }





    #ml-div:hover #svg-ml path:first-child {
        stroke: #570782;
        /* increase the stroke width */
    }

    @keyframes moveLeftAndRight {

        0%,
        100% {
            transform: translateX(0);
            transform: scale(1);
        }

        50% {
            transform: translateX(-10px);
            transform: scale(1.1);
        }
    }

    /* Apply the animation on hover */

    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes moveLeftAndRight {

        0%,
        100% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(-10px);
        }
    }


    #ml-div:not(:hover) img {
        animation: moveLeftAndRight 4s linear infinite;
    }


    #ml-div:hover img {
        animation: moveLeftAndRight 4s linear infinite, zoomIn 1s forwards;
    }

    @keyframes zoomIn {
        0%, 100% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }
    #cosplay-div {
        transition: all 0.5s ease;
    }

    #cosplay-div:hover {
        transform: scale(1.1);

        -webkit-filter: drop-shadow(0 0 10px white);
        filter: drop-shadow(0 0 10px white);
    }

    #cosplay-div:not(:hover) img {
        animation: moveLeftAndRight 4s linear infinite;
    }


    #cosplay-div:hover img {
        animation: moveLeftAndRight 4s linear infinite, zoomIn 1s forwards;
    }



    #cosplay-div:hover #cosplay-svg path:first-child {
        stroke: #F8E41C;
        /* increase the stroke width */
    }

    #cosplay-div:hover #cosplay-text {
        -webkit-text-stroke: 2px #570782;

    }



    @media (min-width: 768px) {
        #daftar-section::before {
            content: '';
            background: linear-gradient(90deg, #4469FF 28.66%, #570782 53.12%, #F8E41C 74.97%);
            height: 60%;
            width: 100%;
            position: absolute;
            top: 20%;
            left: 0;
            z-index: 0 !important;
        }

    }
</style>