<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import {ref, computed} from 'vue';
import {useAuthStore} from './stores/auth';
import { useHead } from '@vueuse/head'

const auth = useAuthStore();

useHead({
      title: computed(() => "Re(a)dman Blog"),
      meta: [
        {
          name: `description`,
          content: "Hi, my name is Harry Redman and I am a recent Computer Science graduate from UEA who has recently returned back from a three-month trip in South East Asia. This is my personal blog where I will write posts about various Computer Science topics, my SEA travel experience, sports, and type 1 diabetes",
        },
        ],
     
    })

const links = [
{name: "Home", link: "/"},
{name: "Posts", link: "/posts"}
]

const tools = [
{name: "Manage Posts", link: "/dashboard/manage-posts"},
{name: "Add Post", link: "/dashboard/add-post"},
{name: "Settings", link: "/settings"}
]

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :tools="tools" :links="links" class="sticky top-0 z-50" />
    <router-view class="grow my-6"/>
    <Footer class="sticky bottom-0 z-50"/>
  </div>
  </template>

<style scoped>

</style>
