

<template>
    <div class="navbar top-0 w-full z-50">
        <Navbar />
    </div>

    <section id="rulebook-section" class="min-h-screen  bg-cover bg-no-repeat flex justify-center items-center">
        <div>
            <p class="uppercase text-white font-black drop-shadow text-5xl text-center mt-20" data-aos="fade-up"
                data-aos-duration="800" data-aos-easing="ease-in-out"> Choose <span class="text-amber-300">Rulebook</span>
            </p>
            <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="800"
                data-aos-easing="ease-in-out">


                <div class="w-full flex px-4 py-16">
                    <div class="mx-auto w-full max-w-md">
                        <RadioGroup v-model="state.selected">
                            <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                            <div class="space-y-2">
                                <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan"
                                    v-slot="{ active, checked }">
                                    <div :class="[
                                        active
                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : '',
                                        checked ? 'bg-purple-600 bg-opacity-75 text-white ' : 'bg-white ',
                                    ]"
                                        class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none">
                                        <div class="flex w-full items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="text-sm">
                                                    <RadioGroupLabel as="p"
                                                        :class="checked ? 'text-white' : 'text-gray-900'"
                                                        class="font-medium">
                                                        {{ plan.name }}
                                                    </RadioGroupLabel>
                                                    <RadioGroupDescription as="span"
                                                        :class="checked ? 'text-sky-100' : 'text-gray-500'" class="inline">
                                                        <span>{{ plan.cpus }}</span>
                                                        <span aria-hidden="true"> &middot; </span>
                                                        <span>{{ plan.disk }}</span>
                                                    </RadioGroupDescription>
                                                </div>
                                            </div>
                                            <div v-show="checked" class="shrink-0 text-white">
                                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                                                    <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroupOption>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <Flipbook data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                    class="flipbook drop-shadow-lg" :pages="state.pages" v-slot="flipbook" ref="flipbook"></Flipbook>

            </div>

        </div>
        <div class="fixed bottom-0 left-0 m-10 z-50">
            <Button color="yellow" :href="href" download target="_blank" class="text-xl font-black">
                download

            </Button>
        </div>
       <Discord/>
    </section>
</template>

<script setup>
import { ref, reactive, watch, onMounted, nextTick } from 'vue';

import Navbar from '@/components/navbar.vue';
import Flipbook from "flipbook-vue";

import Discord from '@/components/discord.vue';

import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
} from '@headlessui/vue';
import { Button, Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Badge } from 'flowbite-vue';
import { gsap } from 'gsap';
import page_1 from '@/assets/rulebook/page-1.jpg';
import page_2 from '@/assets/rulebook/page-2.jpg';
import page_3 from '@/assets/rulebook/page-3.jpg';
import page_4 from '@/assets/rulebook/page-4.jpg';
import page_5 from '@/assets/rulebook/page-5.jpg';
import page_6 from '@/assets/rulebook/page-6.jpg';
import page_7 from '@/assets/rulebook/page-7.jpg';
import page_8 from '@/assets/rulebook/page-8.jpg';
import page_9 from '@/assets/rulebook/page-9.jpg';
import page_10 from '@/assets/rulebook/page-10.jpg';
import page_11 from '@/assets/rulebook/page-11.jpg';
import page_12 from '@/assets/rulebook/page-12.jpg';
import page_13 from '@/assets/rulebook/page-13.jpg';

import page2_1 from '@/assets/rulebook2/page-1.jpg';
import page2_2 from '@/assets/rulebook2/page-2.jpg';
import page2_3 from '@/assets/rulebook2/page-3.jpg';
import page2_4 from '@/assets/rulebook2/page-4.jpg';
import page2_5 from '@/assets/rulebook2/page-5.jpg';
import page2_6 from '@/assets/rulebook2/page-6.jpg';
import page2_7 from '@/assets/rulebook2/page-7.jpg';
import page2_8 from '@/assets/rulebook2/page-8.jpg';
import coswalk from '@/assets/rulebook2/rulebook_coswalk.pdf';
import ml from '@/assets/rulebook/rulebook_ValoML.pdf'


const href = ref('null')  ;
href.value =ml
const plans = [
    {
        name: 'Game',
        cpus: 'Mobile Legend',
        disk: 'Valorant',
    },
    {
        name: 'Design',
        cpus: 'Cosplay',
        disk: 'Design Graphics',
    },
];

const state = reactive({
    selected: plans[0],
    pages: [
        page_1,
        page_2,
        page_3,
        page_4,
        page_5,
        page_6,
        page_7,
        page_8,
        page_9,
        page_10,
        page_11,
        page_12,
        page_13
    ],
});


const animateNavbar = () => {
    gsap.fromTo(".navbar", { y: "-100%" }, { y: "0", duration: 1, ease: "bounce.out" });

}

watch(() => state.selected, (newVal, oldVal) => {

    if (newVal && newVal.name === 'Design') {
        state.pages = [
            page2_1,
            page2_2,
            page2_3,
            page2_4,
            page2_5,
            page2_6,
            page2_7,
            page2_8
        ]; // Change pages to the second set of pages
        href.value =coswalk;
       
    } else {
        state.pages = [
            page_1,
            page_2,
            page_3,
            page_4,
            page_5,
            page_6,
            page_7,
            page_8,
            page_9,
            page_10,
            page_11,
            page_12,
            page_13
        ]; // Change pages to the original set of pages
     
        href.value = ml;
    }
});

onMounted(() => {


    animateNavbar();



});
</script>



<style scoped>
.flipbook {
    width: 100vw;
    height: calc(100vh);
}

#rulebook-section {
    background-image: url(@/assets/bg-rulebook.svg);
    z-index: -1;
}
</style>