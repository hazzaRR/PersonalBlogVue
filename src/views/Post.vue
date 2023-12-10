<template>
<section class="bg-white dark:bg-gray-900">
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

                <h1 class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    {{postDetails.title}}
                </h1>

                <div v-html="markdown.render(postDetails.content)" />


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
// const postDetails = ref(
//   {
//     postId: "/1",
//     imgUrl: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     imgAlt: "a picture of something",
//     postTitle: "What do you want to know about UI",
//     postContent: `

// Welcome to my blog! In this post, I'll be sharing some amazing insights and information about [insert topic here]. Whether you're a seasoned professional or a curious beginner, I hope you find this post both informative and enjoyable.

// ## Introduction

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, libero vel dictum fringilla, tortor velit accumsan lorem, a volutpat risus leo ac tellus.

// ## The Main Points

// ### Point 1: Getting Started

// Duis vehicula risus vel purus dapibus, ut vulputate mauris finibus. Nullam rhoncus arcu vel tincidunt aliquam.

// ### Point 2: Exploring Advanced Concepts

// Fusce id semper turpis. Integer eu neque id tellus fermentum ullamcorper. Proin vel orci a est sollicitudin dapibus.

// ### Point 3: Conclusion

// In conclusion, [insert your key takeaways here]. I hope this post has been insightful and valuable to you.

// ## Conclusion

// Thank you for reading my blog post! If you have any questions or comments, feel free to leave them below. Don't forget to subscribe for more exciting content in the future.

// Happy blogging!
// `,
//      author: "John Snow",
//     authorImg: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     postDate: "February 1, 2022"
//   });


</script>