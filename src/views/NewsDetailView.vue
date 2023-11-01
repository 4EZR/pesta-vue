<template>
    <div class="navbar fixed top-0 w-full z-50">
        <Navbar />
    </div>
    <section class="min-h-screen">

        <div v-if="selectedNews">
          
            <img class='w-full object-cover h-[50vh]' :src="selectedNews.news_image_url" alt="News Image">
            <div class="px-10 py-20 xl:px-96">
                <p class="text-5xl text-white font-black uppercase">{{ selectedNews.news_title }}</p>
               
                <hr class="mt-5 mb-3">
                <div class="flex mb-7">
                    <p class=" text-base text-justify text-slate-400">{{ selectedNews.news_author }}</p>
                    <p class=" text-base text-justify text-slate-400 ms-4">{{ selectedNews.created_at }}</p>
                </div>
                <p class="text-white text-xl text-justify">{{ selectedNews.news_content }}</p>
            </div>
          </div>
    </section>
</template>

<script setup>
import { ref, nextTick, onMounted, computed, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import { gsap } from 'gsap';
import axios from 'axios';
import ScrollTrigger from 'gsap/ScrollTrigger'



import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import Discord from '@/components/discord.vue';
import sponsor1 from '@/assets/sponsor-1.png';
import sponsor2 from '@/assets/sponsor-2.png';
import sponsor3 from '@/assets/sponsor-3.svg';

import faq2 from '@/assets/faq2.svg';

const route = useRoute();

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
const id = parseInt(route.params.id);
const selectedNews = computed(() => {
  return news.value.find(item => item.id === id);
});
</script>
