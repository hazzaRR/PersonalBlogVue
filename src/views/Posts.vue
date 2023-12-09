<template>
  
  <SkeletonGrid v-if="loadingPosts" />
  
  <section v-else class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          
            <!-- <div v-for="post in posts" :key="post.postId" class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" :src="post.imgUrl" :alt="post.imgAlt">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">{{post.postTitle}}</a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">On: {{post.postDate}}</span>
                </div>
            </div> -->

            <div v-for="post in posts" :key="post.postId" class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" :src="post.bannerImage ? getImageSrc(post.bannerImage) : defaultImage" :alt="post.altText">

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <router-link :to="'/post/'+post.postId" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">{{post.title}}</router-link>
                    
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
const defaultImage = ref("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

const options = {year: 'numeric', month: 'long', day: 'numeric' };


onMounted(async () => {
  posts.value = await getPublicPosts();
  console.log(posts);
});
// const posts = ref([
//   {
//     postId: "/1",
//     imgUrl: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     imgAlt: "a picture of something",
//     postTitle: "What do you want to know about UI",
//     postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
//     author: "John Snow",
//     postDate: "February 1, 2022"
//   },
//   {
//     postId: "/2",
//     imgUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     imgAlt: "a picture of something",
//     postTitle: "All the features you want to know",
//     postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
//     author: "Arthur Melo",
//     postDate: "February 6, 2022"
//   },
//     {
//     postId: "/3",
//     imgUrl: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     imgAlt: "a picture of something",
//     postTitle: "Which services you get from Meraki UI",
//     postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
//     author: "Tom Hank",
//     postDate: "February 19, 2022"
//   },
//   ]);

</script>
