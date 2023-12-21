<template>
  
    <header class=" h-[28rem] bg-gray-50 dark:bg-gray-700">
        <div class=" container mx-auto px-4 flex h-full py-6 items-center">
            <div class=" max-w-xl">
                <p class=" text-sky-500 uppercase tracking-wider">Harry Redman</p>

                <h2 class=" text-3xl xl:text-4xl font-bold mt-4 text-gray-800 dark:text-white capitalize">Welcome to my personal blog</h2>

                <p class=" text-gray-500 mt-4 text-lg">Hi, my name is Harry Redman and I am a recent Computer Science graduate from UEA who has recently returned back from a three-month trip in South East Asia.
                     This is my personal blog where I will write posts about various Computer Science topics, my SEA travel experience, sports, and type 1 diabetes.

                </p>
            </div>
        </div>
    </header>
    
    <section class="container mx-auto px-4 py-16">
        <div class=" flex items-center justify-between">
            <h2 class=" text-gray-800 dark:text-white font-bold text-3xl">Latest Articles</h2>

            <button class="flex items-center px-4 py-2.5 font-medium tracking-wide text-sky-500 capitalize transition-colors duration-300 transform border border-sky-500 rounded-lg hover:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80">
                <router-link to="/posts" class="mx-1">Explore All</router-link>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mx-1 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
          
            <div v-for="latestPost in latestPosts" :key="latestPost.postId">
              
              <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" :src="latestPost.bannerImage ? getImageSrc(latestPost.bannerImage): defaultImage" :alt="latestPost.altText">

              <div class="mt-8">
                  <span class="text-sky-500 uppercase tracking-wider">Article</span>

                  <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white truncate">
                      {{latestPost.title}}
                  </h1>

                  <p class="mt-2 text-gray-500 dark:text-gray-400">
                      {{`${latestPost.content.substring(0, 300)}...`}}
                  </p>

                  <div class="flex items-center justify-between mt-4">

                    <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full mr-2" :src="latestPost.authorImage ? getImageSrc(latestPost.authorImage): blank_avatar" alt="">

                    <div class="">
                          <h1 class="text-lg font-medium text-gray-700 dark:text-gray-30 my-0">{{`${latestPost.firstname} ${latestPost.surname}`}}</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{{new Date(latestPost.postedOn).toLocaleDateString('en-uk', options)}}</p>
                      </div>
                    </div>

                        <router-link :to="'/post/'+latestPost.postId" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</router-link>
                  </div>

              </div>
          </div>
        </div>
    </section>

</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getLatestPosts} from '../composables/getLatestPosts'; 
import {getImageSrc} from '../composables/ConvertByteArrayToImage';
import blank_avatar from '../assets/blank_avatar.jpg'

const latestPosts = ref([]);
const defaultImage = ref("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

const options = {year: 'numeric', month: 'long', day: 'numeric' };


onMounted(async () => {
    latestPosts.value = await getLatestPosts();
});

</script>