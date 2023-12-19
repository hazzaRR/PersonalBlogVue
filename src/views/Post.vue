<template>
<section class="bg-white dark:bg-inherit">
    <div class="container px-6 py-4 mx-auto">
        <SkeletonParagraph v-if="postDetails === null" />

        <NotFound v-else-if="postDetails === 404" />

        <div v-else class="mt-8">
            <img class="object-cover w-full rounded-xl h-72 lg:h-96" :src="postDetails.bannerImage ? getImageSrc(postDetails.bannerImage): defaultImage" :alt="postDetails.altText">

            <div class="mt-6">
                <p v-if="postDetails.categories.length === 1" class="text-sm text-blue-500 uppercase">category</p>
                <p v-else class="text-sm text-blue-500 uppercase">categories</p>

                <div class="flex space-x-2 mt-2">
                    <div class="badge badge-neutral" v-for="category in postDetails.categories" :key="category.categoryId">
                        {{category.categoryName}}
                    </div>
                </div>

                <h1 class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white capitalize">
                    {{postDetails.title}}
                </h1>

                <div class="markdown" v-html="markdown.render(postDetails.content)" />


                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full mr-2" :src="postDetails.authorImage ? getImageSrc(postDetails.authorImage): '/src/assets/blank_avatar.jpg'" alt="">

                    <div class="">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200 my-0">{{`${postDetails.firstname} ${postDetails.surname}`}}</h1>
                        <p class="text-sm text-blue-500">Posted on: {{new Date(postDetails.postedOn).toLocaleDateString('en-uk', options)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getPost} from '../composables/getPost'; 
import {getImageSrc} from '../composables/ConvertByteArrayToImage'; 
import SkeletonParagraph from '../components/SkeletonParagraph.vue';
import NotFound from '../components/NotFound.vue'
const props = defineProps(['id']);


import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
const postDetails = ref(null);
const defaultImage = ref("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

const options = {year: 'numeric', month: 'long', day: 'numeric' };

onMounted(async () => {
    postDetails.value = await getPost(props.id);
});


</script>