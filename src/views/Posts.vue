<template>
  
  <SkeletonGrid v-if="loadingPosts" />
  
  <section v-else class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

            <div v-for="post in posts" :key="post.postId" class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" :src="post.bannerImage ? getImageSrc(post.bannerImage) : defaultImage" :alt="post.altText">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <router-link :to="'/post/'+post.postId" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white capitalize">{{post.title}}</router-link>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">Posted On: {{new Date(post.postedOn).toLocaleDateString('en-uk', options)}}</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import SkeletonGrid from '../components/SkeletonGrid.vue';
import {ref, onMounted, computed} from 'vue';
import {getPublicPosts} from '../composables/getAllPublicPosts'; 
import {getImageSrc} from '../composables/ConvertByteArrayToImage'; 


const loadingPosts = computed(() => {
  return posts.value.length > 0 ? false : true
})

const posts = ref([]);
const defaultImage = ref("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

const options = {year: 'numeric', month: 'long', day: 'numeric' };


onMounted(async () => {
  posts.value = await getPublicPosts();
  console.log(posts);
});

</script>
