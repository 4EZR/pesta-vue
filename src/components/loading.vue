<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// Define a reactive reference for the loading state
const isLoading = ref(true);

// Use the onMounted hook to start the animation when the component is mounted
onMounted(() => {
    // Use GSAP to animate the opacity of a loading screen element
    gsap.fromTo('.loading-screen', { opacity: 0 }, { opacity: 1, duration: 1 });

    // Simulate a delay
    setTimeout(() => {
        isLoading.value = false;
        gsap.to('.loading-screen', { opacity: 0, duration: 1 });
    }, 3000);
});

// Expose the isLoading reference to the template
return { isLoading };
</script>
<template>
    <div class="z-10 loading-effect overflow-hidden">
        <div class="flex h-full ">
            <div class="w-full md:w-1/2 hero">
                <div class="">
                    <div class="flex justify-center items-center min-h-screen">
                        <div>
                            <p class='text-4xl mb-5 font-bold text-zinc-50 uppercase drop-shadow-xl'>January 2024
                            </p>
                            <svg width="478" height="95" viewBox="0 0 478 95" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10_44)" filter="url(#filter0_d_10_44)">
                                    <path
                                        d="M4 38.3314H78.983V26.0223H32.7598L15.5039 8.63428H98.0178V54.0165H21.7896V87H4V38.3314Z"
                                        fill="#F8E41C" />
                                    <path
                                        d="M4 29.6971H78.983V17.3582H32.7598L15.5039 0H98.0178V45.3822H21.7896V78.3358H4V29.6971Z"
                                        fill="white" />
                                    <path d="M125.206 8.63428V24.7376H186.906L194.052 8.63428H125.206Z" fill="#570782" />
                                    <path
                                        d="M106.142 43.5298V87H192.866L186.195 71.6136H122.33V56.7352H179.761V43.5298H106.142Z"
                                        fill="#570782" />
                                    <path
                                        d="M106.142 32.5652V76.0354H192.866L186.195 60.649H122.33V45.7706H179.761V32.5652H106.142Z"
                                        fill="white" />
                                    <path d="M125.206 1.85236V17.9258H186.906L194.052 1.85236H125.206Z" fill="white" />
                                    <path
                                        d="M205.763 25.365C208.55 33.4317 211.337 41.5282 214.095 49.5948H279.145C279.145 55.3609 279.145 61.1271 279.145 66.8932H213.62L203.362 85.1477H295.808V35.4633H225.776V24.409H284.156C287.862 18.2545 291.598 12.0999 295.304 5.91553H205.793C205.793 12.3987 205.793 18.8819 205.793 25.365H205.763Z"
                                        fill="#F8E41C" />
                                    <path
                                        d="M208.58 21.3018C211.367 29.3685 214.154 37.465 216.911 45.5316H281.962C281.962 51.2977 281.962 57.0639 281.962 62.83H216.437L206.178 81.0845H298.625V31.3702H228.593V20.3159H286.972C290.679 14.1614 294.414 8.00686 298.121 1.82245H208.61C208.61 8.30562 208.61 14.7888 208.61 21.272L208.58 21.3018Z"
                                        fill="white" />
                                    <path
                                        d="M346.152 8.81351H385.616L379.419 24.1998H355.818V86.5817H336.902V24.17L346.123 8.78363L346.152 8.81351Z"
                                        fill="#F8E41C" />
                                    <path d="M308.498 8.15625V23.5426H331.298L339.867 8.15625H308.498Z" fill="#570782" />
                                    <path d="M308.498 1.82245V17.2088H331.298L339.867 1.82245H308.498Z" fill="white" />
                                    <path
                                        d="M346.152 1.82245H385.616L379.419 17.2088H355.818V79.5906H336.902V17.2088L346.123 1.82245H346.152Z"
                                        fill="white" />
                                    <path
                                        d="M408.327 7.3197H430.712L470.887 86.5518H453.512L418.734 21.989L390.597 75.886H427.065L431.809 86.5518H367.263L408.327 7.3197Z"
                                        fill="#570782" />
                                    <path
                                        d="M411.41 1.10541H433.796L474 80.3375H456.596L421.817 15.7747L393.71 69.6717H430.149L434.922 80.3375H370.346L411.41 1.10541Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_10_44" x="0" y="0" width="478" height="95"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_44" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_44"
                                            result="shape" />
                                    </filter>
                                    <clipPath id="clip0_10_44">
                                        <rect width="470" height="87" fill="white" transform="translate(4)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p class='text-4xl my-5 font-bold text-zinc-50 uppercase drop-shadow-xl'>penabur e-sport
                                <br>
                                tournament
                            </p>
                            <svg width="162" height="68" viewBox="0 0 162 68" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <a @click="ToggleAnimation()">
                                    <g filter="url(#filter0_d_517_210)">
                                        <path d="M13 37.5V3H142L149.5 10.5V45H20.5L13 37.5Z" fill="#3F65FF" />
                                        <path d="M13 37.5V3H142L149.5 10.5V45H20.5L13 37.5Z" stroke="#F8E41C"
                                            stroke-width="5" />
                                    </g>
                                    <g filter="url(#filter1_i_517_210)">
                                        <path
                                            d="M61.432 26.008C61.432 26.952 61.536 27.584 61.744 27.904C61.952 28.224 62.352 28.384 62.944 28.384C63.232 28.384 63.464 28.344 63.64 28.264C63.832 28.168 63.976 28.056 64.072 27.928C64.184 27.8 64.264 27.592 64.312 27.304C64.36 27.016 64.384 26.76 64.384 26.536C64.4 26.296 64.408 25.944 64.408 25.48V16.744H67.432V25.984C67.432 27.712 67.056 29.032 66.304 29.944C65.552 30.84 64.432 31.288 62.944 31.288C59.952 31.288 58.44 29.528 58.408 26.008H61.432ZM69.7094 23.848C69.7094 21.88 70.4454 20.176 71.9174 18.736C73.4054 17.28 75.1494 16.552 77.1494 16.552C79.1654 16.552 80.9014 17.28 82.3574 18.736C83.8134 20.192 84.5414 21.92 84.5414 23.92C84.5414 25.952 83.8054 27.688 82.3334 29.128C80.8774 30.568 79.1174 31.288 77.0534 31.288C75.0374 31.288 73.3094 30.568 71.8694 29.128C70.4294 27.672 69.7094 25.912 69.7094 23.848ZM77.0774 28.384C78.3094 28.384 79.3574 27.952 80.2214 27.088C81.1014 26.224 81.5414 25.168 81.5414 23.92C81.5414 22.672 81.1094 21.616 80.2454 20.752C79.3974 19.872 78.3574 19.432 77.1254 19.432C75.9254 19.432 74.8934 19.872 74.0294 20.752C73.1654 21.616 72.7334 22.648 72.7334 23.848C72.7334 25.112 73.1654 26.184 74.0294 27.064C74.8934 27.944 75.9094 28.384 77.0774 28.384ZM86.5806 16.744H89.5326V31H86.5806V16.744ZM91.825 31V16.744H93.601L100.537 24.88V16.744H103.561V31H101.785L94.849 22.84V31H91.825Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_517_210" x="0.5" y="0.5" width="161.5" height="67"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="10" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                result="effect1_dropShadow_517_210" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_517_210"
                                                result="shape" />
                                        </filter>
                                        <filter id="filter1_i_517_210" x="58.408" y="16.552" width="45.1531" height="18.736"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                result="shape" />
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                            <feColorMatrix type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_517_210" />
                                        </filter>
                                    </defs>
                                </a>
                            </svg>
                        </div>


                    </div>
                </div>

            </div>
            <div class="w-full md:w-1/2 ">
                <div>
                    <div>

                        <div>
                            <img src="assets/bg-test.png"
                                class="hero2 bg-test w-[80vw] h-screen object-cover absolute bottom-0 right-0">
                            <div class="absolute inset-0 bg-purple-500 opacity-20"></div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>
</template>



<style scoped>

</style>