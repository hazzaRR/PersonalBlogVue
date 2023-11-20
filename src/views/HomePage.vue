<template>
  
    <header class=" h-[28rem] bg-gray-50">
        <div class=" container mx-auto px-4 flex h-full py-6 items-center">
            <div class=" max-w-xl">
                <p class=" text-sky-500 uppercase tracking-wider">knowleddge base</p>

                <h2 class=" text-3xl xl:text-4xl font-bold mt-4 text-gray-800 capitalize">All Resurece You Need to grow</h2>

                <p class=" text-gray-500 mt-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error odit vel minima optio consequuntur atque omnis, repellendus eos, rerum totam quas vitae voluptatibus, facere distinctio fugit? Nam, iure expedita!</p>
            </div>
        </div>
    </header>
    
    <section class=" container mx-auto px-4 py-16">
        <div class=" flex items-center justify-between">
            <h2 class=" text-gray-800 font-bold text-3xl">Latest Articles</h2>

            <button class="flex items-center px-4 py-2.5 font-medium tracking-wide text-sky-500 capitalize transition-colors duration-300 transform border border-sky-500 rounded-lg hover:bg-sky-50 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80">
                <router-link to="/posts" class="mx-1">Explore All</router-link>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 mx-1 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 xl:grid-cols-3">
          
            <div v-for="latestPost in latestPosts" :key="latestPost.postId">
              
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" :src="latestPost.imgUrl" :alt="latestPost.imgAlt">

                <div class="mt-8">
                    <span class="text-sky-500 uppercase tracking-wider">Article</span>

                    <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white truncate">
                        {{latestPost.postTitle}}
                    </h1>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        {{latestPost.postContent}}
                    </p>

                    <div class="flex items-center justify-between mt-4">
                        <div>
                            <router-link to="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                {{latestPost.author}} 
                            </router-link>

                            <p class="text-sm text-gray-500 dark:text-gray-400">{{latestPost.postDate}}</p>
                        </div>

                  <router-link :to="latestPost.postId" class="inline-block text-sky-500 underline hover:text-sky-400">Read more</router-link>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
        <div class="container px-4 py-10 lg:py-16 mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Join us and get the update from anywhere
            </h2>

            <div class="mt-8 lg:mt-0">
                <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address">

                    <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-md focus:ring focus:ring-sky-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-sky-400 focus:outline-none focus:bg-sky-400">
                        Get Started
                    </button>
                </div>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
            </div>
        </div>
    </section>

</template>

<script setup>
import {ref} from 'vue';



const latestPosts = ref([
  {
    postId: "/1",
    imgUrl: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    imgAlt: "a picture of something",
    postTitle: "What do you want to know about UI",
    postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
    author: "John Snow",
    postDate: "February 1, 2022"
  },
  {
    postId: "/2",
    imgUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    imgAlt: "a picture of something",
    postTitle: "All the features you want to know",
    postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
    author: "Arthur Melo",
    postDate: "February 6, 2022"
  },
    {
    postId: "/3",
    imgUrl: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    imgAlt: "a picture of something",
    postTitle: "Which services you get from Meraki UI",
    postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
    author: "Tom Hank",
    postDate: "February 19, 2022"
  },
  ]);
</script>