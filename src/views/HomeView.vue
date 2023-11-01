
<template>
    <div class="navbar fixed top-0 w-full z-50" v-show="isLoading">
        <Navbar />
    </div>

    <section class="flex h-screen z-0 overflow-y-hidden overflow-hidden z-1 " v-show="isLoading">
        <div class="w-screen md:w-1/2 z-10 daftar bg-left-top bg-no-repeat bg-cover hidden md:block">
            <div>
                <div class="hidden md:flex justify-start items-center md:ms-14  min-h-screen z-10 ">
                    <div>
                        <p class='text-6xl font-black text-white uppercase drop-shadow-xl z-10'>Daftar <br>
                            <span class="text-amber-300">Sekarang</span>
                        </p>
                        <p class='text-3xl mb-5 font-bold text-zinc-50 drop-shadow-xl z-10 uppercase'>
                            PLAY IT, IGNITE IT!
                        </p>
                        <Button color="yellow" @click="$router.push({ name: 'daftar' })">
                            <p class="uppercase font-black p-0 m-0">Daftar</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen md:w-1/2 z-0">
            <div>
                <div>
                    <div class="">
                        <img src="@/assets/bg-daftar.png"
                            class="  blur-sm  md:filter-none w-[100vw] h-screen object-cover absolute top-0 right-0  z-0">


                    </div>
                    <div class="daftar2 bg-none h-screen flex items-center justify-center block md:hidden">
                        <div>
                            <p class='text-6xl font-black text-white uppercase drop-shadow-xl z-10'>Daftar <br>
                                <span class="text-amber-300">Sekarang</span>
                            </p>
                            <p class='text-4xl mb-5 font-bold text-zinc-50 drop-shadow-xl z-10 uppercase'>
                                PLAY IT, IGNITE IT!
                            </p>
                            <Button color="yellow" @click="$router.push({ name: 'daftar' })">
                                <p class="uppercase font-black p-0 m-0">Daftar</p>
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <Discord />
        <social />
    </section>

    <section class="divider-2 p-8" v-if="isLoading">

    </section>

    <section id='schedule-section' class="schedule p-10 bg-cover bg-no-repeat md:p-20" v-if="isLoading">
        <div>

            <p id='schedule_title'
                class="text-6xl aos-item   text-center uppercase font-black drop-shadow-md text-white mb-20"
                data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                Schedule</p>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div class=" bg-white rounded-t-md">
                    <div
                        class="flex justify-start flex-nowrap items-center overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden">
                        <div class="grow" v-for="(value, key) in schedule_real" :key="key">
                            <button @click="clearTable(); selectedDay = key; setActiveButton(key)"
                                :class="{ 'bg-purple-800': activeButton === key }"
                                class=" w-full h-full grow rounded-none  outline-none focus:outline-none hover:bg-purple-800  ">
                                <p :class="{ 'text-white': activeButton === key }"
                                    class="p-5 m-0 text-lg uppercase text-start text-purple-700 hover:text-white">{{ key }}
                                </p>
                            </button>
                        </div>


                    </div>
                    <p class="px-8 pt-8 text-base uppercase">Location</p>
                    <p class="font-bold  uppercase text-purple-700 px-8 pb-8 text-3xl">{{
                        schedule_real[selectedDay].location }}
                    </p>
                </div>

                <Table class="bg-neutral-300 sm:rounded-t-none" hoverable>
                    <table-head>
                        <table-head-cell class="font-black text-slate-400">
                            <p class="text-xl m-0 py-3">Remarks</p>
                        </table-head-cell>
                        <table-head-cell class="text-end font-black text-slate-400">
                            <p class="text-xl m-0 py-3">Time</p>
                        </table-head-cell>
                    </table-head>
                    <table-body v-if="selectedDay">
                        <table-row v-for="event in schedule_real[selectedDay].events" :key="event.id">
                            <table-cell class="p-2">
                                <p class="me-5 text-xl mb-2">{{ event.topics }}</p>
                                <div class="flex">

                                    <Badge class="w-fit me-2 text-sm" v-if="event.tag.length > 0"
                                        v-for="(tag, index) in event.tag.split(',')" :key="index"
                                        :type="getBadgeVariant(tag.trim())">
                                        {{ tag.trim() }}
                                    </Badge>
                                </div>

                            </table-cell>
                            <table-cell>

                                <p class=" text-lg">{{ event.time }}</p>
                            </table-cell>
                        </table-row>
                    </table-body>
                </Table>
            </div>
        </div>
    </section>

    <section class="sponsor p-4 sm:p-10 md:p-20 " v-if="isLoading" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out">
        <div
            class="rounded-2xl bg-gradient bg-center bg-contain bg-no-repeat p-5 md:p-20 border-amber-300 border-4 relative">

            <img src="@/assets/register-component.svg" class="absolute -right-7 top-16 h-40" alt="">
            <div class="p-4  md:p-10 ">
                <p class="text-6xl text-center font-black uppercase dropshadow text-amber-300" data-aos="fade-up"
                    data-aos-duration="800" data-aos-easing="ease-in-out">Official Partner</p>
                <!-- <div class="marquee overflow-hidden whitespace-nowrap">
                    <img class='w-32 me-20' v-for="image in images" :key="image.id" :src="image.src" />
                </div> -->
                <div class="w-full flex p-5  md:p-10 justify-center items-center" data-aos="fade-up" data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    <img src="@/assets/sponsor-3.svg" class="h-14" alt="">

                </div>
            </div>

            <div data-aos="fade-up">

                <div class="divider-1 p-1 mb-20" v-if="isLoading">

                </div>

                <Vue3Marquee :pause-on-click="true" :clone="true" :duration="5" :pause-on-hover="true">
                    <img class='w-32 me-20' v-for="image in images" :key="image.id" :src="image.src" />
                </Vue3Marquee>

            </div>

        </div>
    </section>

    <section class="divider-1 p-8" v-if="isLoading">

    </section>

    <section id="news" class="relative min-h-screen p-10 md:p-20 flex justify-center items-center" v-if="isLoading">

        <div>
            <p id='news_title' class="text-6xl aos-item   text-center uppercase font-black drop-shadow-md text-white mb-20"
                data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                News</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">


                <div class="md:col-span-2  drop-shadow-md" data-aos="fade-up" data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    <!-- <swiper class="swiper-test " :modules="modules" :slides-per-view="1" navigation :space-between="8"
                     :rewind="true">
                     <swiper-slide class='rounded-md   bg-white' v-for="newsitem in news" :key="newsitem.id">
                         <div class="flex flex-col">
        
                             <img class="object-cover h-64 w-fill" :src="newsitem.news_image_url">
                             <div class="p-5 bg-white">
                                 <h2 class="text-xl font-bold uppercase">{{ newsitem.news_title }}</h2>
                                 <p class="text-lg mb-5">{{ newsitem.news_desc }}</p>
                                 <a :href="newsitem.news_url_reference" class="text-blue-500">Read more</a>
                             </div>
                         </div>
        
                     </swiper-slide>
                 </swiper> -->
                    <!-- card showing newest content -->
                    <div class="h-[36rem] bg-cover bg-center rounded-[1.25rem] flex items-end flex-nowrap j p-0 zoom-hover"
                        :style="{ 'background-image': 'url(' + news[0].news_image_url + ')' }">

                        <div class="h-fit w-full rounded-b-[1.25rem] p-5 bg-[#570782]/50">
                            <div>
                                <div class="flex justify-between items-center">
                                    <p class="text-lg  uppercase text-white">{{ news[0].news_author }}</p>
                                    <p class="text-lg mb-2 uppercase text-white">{{ news[0].created_at }}</p>
                                </div>
                                <p class="text-4xl font-black uppercase text-white">{{ news[0].news_title }}</p>
                                <p class="text-xl  mb-2 text-white">{{ news[0].news_desc }}</p>

                               
                                <Button color="yellow" class=' text-center ' @click="this.$router.push({ name: 'News', params: { id: news[0].id } })">
                                    Read More
                                </Button>


                            </div>
                        </div>
                    </div>
                </div>


                <div class="h-[36rem]  overflow-y-scroll rounded-[1.25rem]" data-aos="fade-up" data-aos-duration="900"
                    data-aos-easing="ease-in-out">

                    <!-- Scroll Content -->
                    <div class=" drop-shadow-md" v-for="(newsitem, index) in news.slice(1)">
                        <!-- Your news item markup -->
                        <img class="object-cover h-64 w-full" :src="newsitem.news_image_url">
                        <div class="p-5 bg-white">
                            <h2 class="text-xl font-bold uppercase text-[#570782]">{{ newsitem.news_title }}</h2>
                            <p class="text-lg mb-5">{{ newsitem.news_desc }}</p>


                            <Button color="purple" class=' text-center ' @click="this.$router.push({ name: 'News', params: { id: newsitem.id } })">
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section class="divider-2 p-8" v-if="isLoading">

    </section>

    <section id='faq-scroll' class="faq p-10 md:p-20   bg-[#570782] " v-if="isLoading">

        <div class='aos-item' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div
                class="faq-section w-full h-full rounded-2xl bg-gradient bg-center bg-contain bg-no-repeat  border-amber-300 border-4 p-10 relative">
                <p class="text-6xl  text-center uppercase font-black drop-shadow-md text-white mb-20 ">FAQ</p>
                <img src="@/assets/faq2.svg" class="absolute -top-5 -right-5" alt="">

                <Disclosure v-for="item in faq" :key="item.id" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full mt-2 justify-between rounded-lg z-50 bg-purple-100 p-5 text-left text-base font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{{ item.question }}</span>
                        <Icon icon="solar:alt-arrow-down-broken" :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-purple-500 font-black" />
                    </DisclosureButton>
                    <transition enter-active-class="transition ease-out duration-300"
                        enter-from-class="transform translate-y-full opacity-0"
                        enter-to-class="transform translate-y-0 opacity-100"
                        leave-active-class="transition ease-in duration-300"
                        leave-from-class="transform translate-y-0 opacity-100"
                        leave-to-class="transform -translate-y-full opacity-0">
                        <DisclosurePanel ref="disclosurePanel" class="px-4 pt-4 pb-2 text-base text-white text-base">
                            <p class="text-justify" v-html="item.answer"> </p>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <div class="flex justify-end items-center  mt-5">
                    <p class="text-end text-white me-3 p-0">Have questions? Ask directly on our Whats App CS :
                        +6281514474083
                    </p>
                    <Button color="yellow" class='m-0 flex-nowrap text-center flex'  target="_blank">

                        Contact Us
                    </Button>



                </div>

                <img src="@/assets/faq1.svg" class="absolute w-64 -bottom-10 z-0 pulses" alt="">
            </div>
        </div>









    </section>
    <Footer v-if="isLoading" />

    <section id="loading" :class="{ 'hidden': isLoading }" class="min-h-screen z-0 overflow-y-hidden z-1 z-1">
        <div class="z-10 loading-effect overflow-x-hidden">
            <div class="flex h-full ">
                <div
                    class="w-full md:w-1/2 bg-cover  min-h-screen z-0 overflow-y-hidden z-1  md:bg-no-repeat  md:bg-contain xl:bg-cover hero">
                    <div class="">
                        <div class="md:mt-16 flex justify-center  items-center min-h-screen">
                            <div>
                                <p id="event-date"
                                    class='text-3xl font-black  leading-0 tracking-tighter text-zinc-50 uppercase drop-shadow-xl'>
                                    15 january
                                    2024</p>
                                <img class='my-5 object-scale-down' src="@/assets/loading/PESTA.svg" alt="">

                                <p class='text-4xl mb-3 font-black  text-zinc-50 tracking-tighter uppercase drop-shadow-xl'>
                                    <span class="">Penabur </span><span class="text-amber-300">e-sport</span><br> tournament
                                </p>
                                <a @click="toggleAnimation">
                                    <img src="@/assets/loading/button.svg" alt="">
                                </a>

                            </div>


                        </div>
                    </div>

                </div>
                <div class="w-full md:w-1/2 hidden md:block">
                    <div>
                        <div>

                            <div>
                                <img src="@/assets/loading/bg-test.png"
                                    class="hero2 bg-test w-[80vw] h-screen object-cover absolute bottom-0 right-0">
                                <div class="absolute inset-0 bg-purple-500 opacity-20"></div>
                                <p></p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>
<script setup>
import { ref, nextTick, onMounted, computed, onBeforeUnmount } from 'vue';
import { Icon } from '@iconify/vue';
import { gsap } from 'gsap';
import axios from 'axios';
import ScrollTrigger from 'gsap/ScrollTrigger'

axios.defaults.baseURL = 'https://dev.bpkpenaburjakarta.or.id/PestaApi/public/api';
axios.defaults.withCredentials = true;

import { Button, Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Badge } from 'flowbite-vue';
import { Vue3Marquee } from 'vue3-marquee'


import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay, Scrollbar, A11y, Pagination, Navigation } from 'swiper/modules';

import {
    TransitionRoot, Disclosure, DisclosureButton, DisclosurePanel, Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import Discord from '@/components/discord.vue';
import sponsor1 from '@/assets/sponsor-1.png';
import sponsor2 from '@/assets/sponsor-2.png';
import sponsor3 from '@/assets/sponsor-3.svg';
import social from '@/components/social.vue'
import faq2 from '@/assets/faq2.svg';


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';



// Initializations


const disclosurePanel = ref(null);
const isOpen = ref(false);
const isLoading = ref(false);

const selectedDay = ref('Pre-event,12 January 2023');
let activeButton = ref('Pre-event,12 January 2023');

const schedule_title = ref(null);

const images = ref([
    { id: 1, src: sponsor1 },
    { id: 2, src: sponsor2 },
    { id: 3, src: sponsor3 },
]);

const schedule_real = ref({
    'Pre-event,12 January 2023': {
        location: 'SMAK 7 PENABUR',
        events: [
            { id: 1, topics: 'Opening Ceremony', time: '13:00 - 14:00', tag: '' },
            { id: 2, topics: 'Technical Meeting', time: '14:00 - 15:00', tag: '' },

        ],
    },
    'Day 1, 15 January 2023': {
        location: 'SMAK 7 Penabur',
        events: [
            { id: 3, topics: 'Knock Out Stage (BO3)', time: '10:00 - 16:00', tag: 'Valorant' },
            { id: 4, topics: 'Knock Out Stage (BO3)', time: '10:00 - 16:00', tag: 'Mobile Legend' },
            { id: 5, topics: 'Group Stage Draw', time: '16:00 - 17:00', tag: 'Valorant' },
            { id: 6, topics: 'Group Stage Draw (Group A-D)', time: '16:00 - 17:00', tag: 'Mobile Legend' },
        ],
    },

    'Day 2, 16 January 2023': {
        location: 'SMAK 7 Penabur',
        events: [
            { id: 7, topics: 'Group Stage (Grup A-B)', time: '10:00 - 16:00', tag: 'Valorant' },
            { id: 8, topics: 'Knock Out Stage BO1', time: '10:00 - 16:00', tag: 'Mobile Legend' },
            { id: 9, topics: 'Group Stage Draw (Group E-H)', time: '10:00 - 16:00', tag: 'Mobile Legend' },
        ],
    },

    'Day 3, 17 January 2023': {
        location: 'SMAK 7 Penabur',
        events: [
            { id: 10, topics: 'Group Stage (Grup C-D)', time: '10:00 - 16:00', tag: 'Valorant' },
            { id: 11, topics: 'Group Stage (Grup A-H)', time: '10:00 - 16:00', tag: 'Mobile Legend' },

        ],
    },
    'Day 4, 18 January 2023': {
        location: 'SMAK 7 Penabur',
        events: [
            { id: 12, topics: 'Quarterfinals', time: '10:00 - 16:00', tag: 'Valorant' },
            { id: 13, topics: 'Round Of 16 (BO3)', time: '10:00 - 16:00', tag: 'Mobile Legend' },
        ],
    },
    'Day 5, 19 January 2023': {
        location: 'Emporium Mall, Lobby Atrium',
        events: [
            { id: 14, topics: 'Semifinal', time: '12:00 - 16:00', tag: 'Valorant' },
            { id: 15, topics: 'Quarterfinals', time: '15:00 - 16:00', tag: 'Mobile Legend' },
            { id: 16, topics: 'Third-Place Decider', time: '17:00 - 19:00', tag: 'Valorant' },
            { id: 17, topics: 'Grand Final', time: '20:00 - 21:00', tag: 'Valorant' },
        ],
    },

    'Day 6, 20 January 2023': {
        location: 'Emporium Mall, Lobby Atrium',
        events: [
            { id: 18, topics: 'Re-Registration', time: '10:00 - 11:00', tag: 'Coswalk,Design' },
            { id: 19, topics: 'Coswalk Competition', time: '11:30 - 12:00', tag: 'Coswalk' },
            { id: 20, topics: 'Semifinal', time: '12:00 - 14:00', tag: 'Mobile Legend' },
            { id: 21, topics: 'Digital Design Character', time: '12:00 - 14:00', tag: 'Design' },
            { id: 22, topics: 'Third-Place Decider', time: '14:30 - 16:30', tag: 'Mobile Legend' },
            { id: 23, topics: 'Coswalk Competition', time: '11:30 - 12:00', tag: 'Coswalk' },
            { id: 24, topics: 'Grand Final', time: '16:40 - 18:43', tag: 'Mobile Legend' },
            { id: 25, topics: 'Closing Ceremony & Awarding', time: '18:50', tag: '' },
        ],
    },
});

const news = ref([
    {
        id: 1,
        news_author: 'John Doe',
        news_title: 'Exciting Esports Event at Penabur School',
        news_desc: 'The Penabur School Esports event was a huge success, with students showcasing their gaming skills.',
        news_url_reference: '',
        news_image_url: 'https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2019/11/M1_MLBB_17-1024x576.jpg',
        news_content: 'The event featured various esports games and tournaments that kept everyone on the edge of their seats.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 2,
        news_author: 'Jane Smith',
        news_title: 'Penabur School Esports PESTA Highlights',
        news_desc: 'Get ready to relive the best moments from the Penabur School Esports PESTA event.',
        news_url_reference: '',
        news_image_url: 'https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt71293e2b35cf7511/6401428a10329144ff021033/VCT23_Road_to_Champ_Article_2022_Champs.jpg',
        news_content: 'From epic battles to nail-biting finishes, the event had it all.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 3,
        news_author: 'Michael Johnson',
        news_title: 'Student Champions Shine at Esports PESTA',
        news_desc: 'Several Penabur School students emerged as champions in different esports categories at the PESTA event.',
        news_url_reference: '',
        news_image_url: 'https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2019/11/M1_MLBB_17-1024x576.jpg',
        news_content: 'These talented students have proven their gaming prowess and sportsmanship.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 4,
        news_author: 'Sarah Lee',
        news_title: 'Esports Enthusiasts Unite at Penabur School',
        news_desc: 'The Penabur School Esports event brought together esports enthusiasts from across the region.',
        news_url_reference: '',
        news_image_url: 'https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt71293e2b35cf7511/6401428a10329144ff021033/VCT23_Road_to_Champ_Article_2022_Champs.jpg',
        news_content: 'Gamers, fans, and experts shared their passion for gaming during this exciting event.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 5,
        news_author: 'David Brown',
        news_title: 'Penabur School\'s Esports Community Thrives',
        news_desc: 'The school\'s esports community is growing rapidly, thanks to events like PESTA that foster gaming talent.',
        news_url_reference: '',
        news_image_url: 'https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2019/11/M1_MLBB_17-1024x576.jpg',
        news_content: 'Students are encouraged to explore their gaming potential and teamwork.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 6,
        news_author: 'Lisa Taylor',
        news_title: 'The Journey of Esports at Penabur School',
        news_desc: 'Discover how Penabur School\'s esports journey has evolved over the years, culminating in the PESTA event.',
        news_url_reference: '',
        news_image_url: 'https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt71293e2b35cf7511/6401428a10329144ff021033/VCT23_Road_to_Champ_Article_2022_Champs.jpg',
        news_content: 'From humble beginnings to a thriving esports scene, it\'s been an incredible ride.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 7,
        news_author: 'Robert Clark',
        news_title: 'Behind the Scenes of PESTA Esports Event',
        news_desc: 'Explore the hard work and dedication that went into organizing the Penabur School Esports PESTA event.',
        news_url_reference: '',
        news_image_url: 'https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2019/11/M1_MLBB_17-1024x576.jpg',
        news_content: 'Meet the team that made it all possible and learn about the challenges they overcame.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    },
    {
        id: 8,
        news_author: 'Emily White',
        news_title: 'Esports PESTA: A Memorable Experience',
        news_desc: 'Participants and attendees alike share their unforgettable experiences from the Penabur School Esports PESTA.',
        news_url_reference: '',
        news_image_url: 'https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt71293e2b35cf7511/6401428a10329144ff021033/VCT23_Road_to_Champ_Article_2022_Champs.jpg',
        news_content: 'From making new friends to witnessing epic battles, the event had it all.',
        created_at: '2023-10-26 13:58:03',
        updated_at: null,
        news_archived_flag: 0
    }
]);

const clearTable = () => {
    selectedDay.value = null;

}

const setActiveButton = (key) => {
    activeButton.value = key;
}

const getBadgeVariant = (tag) => {
    switch (tag.toLowerCase()) {
        case 'valorant':
            return 'red';
        case 'mobile legend':
            return 'default';
        case 'coswalk':
            return 'yellow';
        case 'design':
            return 'green';
        default:
            return 'gray';
    }
}


const selectedDayEvents = computed(() => schedule_real.value[selectedDay.value].events);


// FAQ Data
const faq = ref([
    { id: 1, question: 'Apa saja perlombaan yang akan ada di PESTA?', answer: 'Untuk esport terdapat perlombaan Mobile Legend dan VALORANT. Selain itu, ada juga kompetisi Coswalk dan Digital Design – Coswalk Character' },
    { id: 2, question: 'Siapa saja target peserta PESTA?', answer: 'Target perlombaan esport adalah murid SMP & SLTA. Target peserta Coswalk Competition adalah TK-SLTA, mahasiswa, dan umum. Sedangkan target untuk Digital Design adalah SLTA dan sederajat.' },
    { id: 3, question: 'Berapa lama rangkaian PESTA berlangsung?', answer: '15-20 Januari 2024' },
    { id: 4, question: 'Di mana dan kapan PESTA diselenggarakan', answer: '12-18 Januari 2024 (Opening Ceremony dan Penyisihan) di SMAK 7 PENABUR (Cipinang)   dan 19-20 Januari 2024 (Semi Final, Final dan Awarding Ceremony) di Mall (Emporium Pluit) ' },
    { id: 5, question: 'Berapa biaya pendaftaran untuk mengikuti kompetisi?', answer: 'Untuk kompetisi Mobile Legend dan Valorant, dikenakan biaya pendaftaran sebesar Rp 100.000/team. Sedangkan untuk kompetisi coswalk dan Design dikenakan biaya pendaftaran sebesar Rp 50.000/orang.' },
    { id: 6, question: 'Bagaimana cara mendapatkan informasi tentang pendaftaran PESTA?', answer: 'Informasi bisa didapatkan melalui media sosial Instagram dan Tiktok @pestaofficial.id. Untuk informasi selengkapnya, bisa menghubungi Whatsapp:<br>📞 Marco Tuwanakotta (+62 823-1458-5856) <br>📞 Mian Gultom (+62 815-1447-4083)' },
    { id: 7, question: 'Apakah PESTA dilaksanakan secara onsite', answer: 'Kompetisi PESTA akan diselenggarakan secara onsite & hybrid <i><span class="text-red-400">*</span>hybrid hanya pada kondisi tertentu</i>' },
]);



// Swiper Methods
const onSwiper = (swiper) => console.log(swiper);
const onSlideChange = () => console.log('slide change');

// Animation Methods


const animateNavbar = () => gsap.fromTo(".navbar", { y: "-100%" }, { y: "0", duration: 1, ease: "bounce.out" });
const animateDaftar = () => gsap.fromTo(".daftar", { x: "-100%" }, { x: "0", duration: 1, ease: "sine.out" });
const animateDaftar2 = () => gsap.fromTo(".daftar2", { x: "-100%" }, { x: "0", duration: 1, ease: "sine.out" });
// Delayed Initialization




// Utility Methods
const initAnimation = () => {
    let elements = gsap.utils.toArray(".hero");
    let element2 = gsap.utils.toArray(".hero2");
    gsap.from(elements, { x: "-100%", stagger: 0.5, duration: 1, ease: "power1.inOut" });
    gsap.from(element2, { x: "100%", stagger: 0.5, duration: 1, ease: "power1.inOut" });
};

const toggleAnimation = () => {
    if (isOpen.value) {
        initAnimation();
    } else {
        gsap.to(".hero", { x: -window.innerWidth, duration: 0.5, ease: "power1.inOut", onComplete: () => { isLoading.value = true; animateNavbar(); animateDaftar(); animateDaftar2(); } });
        gsap.to(".hero2", { x: window.innerWidth, duration: 0.5, ease: "power1.inOut", onComplete: () => { isLoading.value = true; } });

    }
    isOpen.value = !isOpen.value;


};



onMounted(() => {
    axios.get('http://localhost:8080/api/news')
        .then(response => {
            data.value = response.data;
        })
        .catch(error => {
            console.error(error);
        });


    nextTick(() => {
        initAnimation();
        setTimeout(() => {
            if (!isOpen.value) {
                toggleAnimation();

                nextTick(() => {
                    gsap.registerPlugin(ScrollTrigger);
                    const scheduleSection = document.getElementById('schedule-section');
                    const scheduleTitle = document.getElementById('schedule_title');







                });
            }
        }, 2000);
    });

});





</script>


<style scoped> .hero {
     background-image: url('@/assets/loading/bg-hero.svg') !important;
     background-color: transparent;

     background-position: bottom left;

     height: 100vh !important;
     z-index: 1;


 }

 .zoom-bg:hover::before {
     transform: scale(1.1);
 }

 .zoom-bg::before {
     content: "";
     background-image: url('your-image-url');
     background-size: cover;
     background-position: center;
     transition: transform .2s;
 }

 /* width */
 ::-webkit-scrollbar {
     width: 10px;
 }

 /* Track */
 ::-webkit-scrollbar-track {
     background: #f1f1f1;
 }

 /* Handle */
 ::-webkit-scrollbar-thumb {
     background: #570782;
 }

 /* Handle on hover */
 ::-webkit-scrollbar-thumb:hover {
     background: #3a0557;
 }

 .divider-1 {
     background: linear-gradient(90deg, #4469FF -2.67%, #F8E41C 101.04%);
 }

 .divider-2 {
     background: linear-gradient(90deg, #F8E41C -2.67%, #4469FF 101.04%);
 }

 .marquee {
     overflow: hidden;
 }

 .marquee img {
     display: inline-block;

 }



 .collapse-enter-active,
 .collapse-leave-active {
     transition: max-height 0.3s ease;
     overflow: hidden;
 }

 .collapse-enter,
 .collapse-leave-to {
     max-height: 0;
 }

 .daftar {
     background-image: url('@/assets/daftar.svg');
 }

 @keyframes pulse {
     0% {
         opacity: 0;
     }

     50% {
         opacity: 1;
     }

     100% {
         opacity: 0;
     }
 }

 .pulses {
     animation: pulse 3s infinite;
 }

 .faq-section {
     background-image: linear-gradient(115deg, #570782 4.92%, #5732B1 47.15%, #5778FF 83.9%, #F8E41C 147.63%);
     background-size: auto, cover;
     background-position: center;
     background-repeat: no-repeat;
 }

 .custom-shape-divider-bottom-1698380135 {
     position: absolute;
     bottom: 0;
     left: 0;
     width: 100%;
     overflow: hidden;
     line-height: 0;
 }

 .custom-shape-divider-bottom-1698380135 svg {
     position: relative;
     display: block;
     width: calc(126% + 1.3px);
     height: 132px;
 }

 .custom-shape-divider-bottom-1698380135 .shape-fill {
     fill: linear-gradient(115deg, #570782 4.92%, #5732B1 47.15%, #5778FF 83.9%, #F8E41C 147.63%);
 }

 .swiper-slide {
     width: 100% !important;
 }

 .swiper-slide:hover div img {}
</style>
