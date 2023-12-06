<script setup>
import Navbar from './components/Navbar.vue';
import SignedInNavBar from './components/SignedInNavBar.vue';
import Footer from './components/Footer.vue';
import {ref} from 'vue';


const isLoggedIn = ref(false);

const links = [
{name: "Home", link: "/"},
{name: "Manage Posts", link: "/dashboard/manage-posts"},
{name: "Add Post", link: "/dashboard/add-post"},
{name: "Posts", link: "/posts"}
]

const tools = [
{name: "Manage Posts", link: "/dashboard/manage-posts"},
{name: "Add Post", link: "/dashboard/add-post"},
{name: "Settings", link: "/settings"}
]

</script>

<template>
  <SignedInNavBar v-if="isLoggedIn" :tools="tools" />
  <Navbar v-else :links="links" class="sticky top-0 z-50" />
   <router-view class="grow my-6"/>
   <Footer class="sticky bottom-0 z-50"/>
</template>

<style scoped>

</style>
