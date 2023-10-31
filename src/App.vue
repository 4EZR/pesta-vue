<template>
  <transition name="slide-fade" mode="out-in">
  <main class="overflow-hidden relative">

   
    <loading v-if="load" />
    <router-view v-else />

  </main>
  
</transition>
</template>

<script setup>
import { ref, nextTick, onMounted, computed, onBeforeUnmount } from 'vue';
import axios from 'axios'
import { state } from '/src/state.js'
import loading from '/src/components/loading.vue'



</script>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

 @font-face {
   font-family: 'Poppins';
   src: url('@/assets/fonts/poppins.ttf') format('truetype');
 }
 @font-face{
  font-family: 'bruce';
  src:url('@/assets/fonts/Bruce Forever.ttf') format('truetype');
 }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(2em);
    opacity: 0;
  }
 * {
   font-family: 'Poppins';
 }

* {scroll-behavior:  smooth !important;}
 body {
   font-family: 'Poppins', Arial, Helvetica, sans-serif, sans-serif;

   background: linear-gradient(115deg, #570782 4.92%, #5732B1 47.15%, #5778FF 83.9%, #F8E41C 147.63%) !important;
 }

 .bg-gradient{
  background: linear-gradient(115deg, #570782 4.92%, #5732B1 47.15%, #5778FF 83.9%, #F8E41C 147.63%) !important;

 }
 .poppins-text {
   font-family: 'Poppins', Arial, Helvetica, sans-serif, sans-serif;
 }


</style>
