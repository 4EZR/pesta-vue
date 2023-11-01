<template>
    <Navbar class="bg-purple" ref="navbar" solid>

        <template #logo>
            <div class="flex">
                <a href="#" class="flex items-center">
                    <img src="@/assets/penabur-icon.svg" class="h-8 pr-3 mr-3 border-r-2  border-white" alt="Flowbite Logo">
                    <img src="@/assets/pesta-logo.svg" class="h-8 m-0" alt="">

                </a>
            </div>
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse :isShowMenu="isShowMenu">
                <NavbarLink linkAttr="to" link="/" component="RouterLink">
                    <p class="uppercase p-0 m-0 text-white  hover:text-amber-300 font-black text-base">Home</p>
                </NavbarLink>
                <!-- <NavbarLink >
                    <p class="p-0 m-0 uppercase text-white  hover:text-amber-300 font-black text-base">Match</p>
                </NavbarLink>
                <NavbarLink>
                    <p class="p-0 m-0 uppercase text-white hover:text-amber-300 font-black text-base">Score</p>
                </NavbarLink> -->
                <NavbarLink linkAttr="to" link="/rulebook" component="RouterLink">
                    <p class="p-0 m-0 uppercase text-white text-2xl hover:text-amber-300 font-black text-base">Rulebook</p>
                </NavbarLink>
                <NavbarLink linkAttr="to" link="/#faq-scroll" component="RouterLink">
                    <p class="p-0 m-0 uppercase text-white text-2xl  hover:text-amber-300 font-black text-base">Faq</p>
                </NavbarLink>
                <NavbarLink linkAttr="to" link="/#faq-scroll" component="RouterLink">
                    <p class="p-0 m-0 uppercase text-white text-2xl  hover:text-amber-300 font-black text-base">News</p>
                </NavbarLink>
                <NavbarLink linkAttr="to" link="/#faq-scroll" component="RouterLink">
                    <p class="p-0 m-0 uppercase text-white text-2xl  hover:text-amber-300 font-black text-base">Our Caster
                    </p>
                </NavbarLink>
            </NavbarCollapse>
        </template>
        <template #right-side>
            <Button color="yellow" @click="$router.push({ name: 'daftar' })">
                <p class="uppercase font-black p-0 m-0">Register</p>
            </Button>
        </template>

    </Navbar>
</template>
<script setup>
import logo from "@/assets/pesta-logo.svg";
import penaburLogo from "@/assets/penabur-icon.svg";
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue';
import { Button } from 'flowbite-vue'
import { FocusTrap } from '@headlessui/vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { onMounted, ref } from 'vue';

let navbar = ref(null); // reference to the navbar

onMounted(() => {
    let navbarElement = navbar.value.$el; // get the actual DOM element

    ScrollTrigger.scrollerProxy(window, {
        scrollTop(value) {
            return arguments.length ? window.scrollTo(0, value) : window.pageYOffset;
        },
    });

    let timer = null;
    window.addEventListener("scroll", function () {
        clearTimeout(timer);
        gsap.to(navbarElement, { y: "-100%", duration: 0.2, ease: "bounce.out" });

        if (window.pageYOffset >500) {
            navbarElement.classList.remove("bg-purple");
            navbarElement.classList.add("bg-purple-800");
        } else {
            navbarElement.classList.remove("bg-purple-800");
            navbarElement.classList.add("bg-purple");
        }

        timer = setTimeout(function () {
            gsap.to(navbarElement, { y: "0", duration: 1, ease: "bounce.out" });
        }, 150);
    });
});

</script>


<style>
.bg-purple {
    background: rgba(87, 7, 130, 0.40) !important;

}
</style>