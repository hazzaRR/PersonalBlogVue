<template>
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

        <div class="mt-8">
            <img class="object-cover w-full rounded-xl h-72 lg:h-96" :src="postDetails.imgUrl" :alt="postDetails.imgAlt">

            <div class="mt-6">
                <p class="text-sm text-blue-500 uppercase">category</p>

                <h1 class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    {{postDetails.postTitle}}
                </h1>


                <!-- <p>{{ postDetails.postContent }}</p> -->
              
                <!-- Inside the template -->
                <!-- <p v-for="(paragraph, index) in postDetails.postContent.split('\n')" :key="index" class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm"> {{ paragraph }}</p> -->

                <div v-html="markdown.render(postDetails.postContent)" />


                <div class="flex items-center mt-6">
                    <!-- <img class="object-cover object-center w-10 h-10 rounded-full" :src="postDetails.authorImg" alt=""> -->

                    <div class="">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200 my-0">{{postDetails.author}}</h1>
                        <p class="text-sm text-blue-500">Posted on: {{postDetails.postDate}}</p>
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
const props = defineProps(['id'])

import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();


onMounted(async () => {
    postDetails.value = await getPost(props.id);
});


// const postDetails = ref(null);

// onMounted(async () => {
//   postDetails.value = await getPost();
//   console.log(latestPosts);
// });

// const postDetails = ref(
//   {
//     postId: "/1",
//     imgUrl: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     imgAlt: "a picture of something",
//     postTitle: "What do you want to know about UI",
//     postContent: `Keeping Insulin Cool:\n The most challenging aspect of traveling as an insulin-dependent diabetic is ensuring that your insulin remains at the right temperature, especially when venturing into hot climates like Southeast Asia. I found myself faced with this predicament during my travels, and it quickly became clear that a reliable solution was needed. To keep my insulin cool, I turned to Frio cooling wallets. These nifty accessories became my steadfast travel companions, and I brought three different ones with me to cover all scenarios. The small 2-pen option served as a convenient way to carry my daily in-use insulin around during the day. However, I also packed two XL Frio wallets, each split 50:50 between my fast-acting and long-acting insulin. This redundancy was crucial, as it ensured I wouldn't be left without insulin if one wallet were to go missing or malfunction.\n **Carrying Large Quantities of Insulin:**\n Traveling as a diabetic for an extended period meant I needed to carry a larger supply of insulin than usual. The prospect of hauling numerous insulin pens, each requiring cooling, was daunting. However, I discovered a game-changing solution before embarking on my journey. I switched to reusable pens with 3ml cartridges, a choice I discussed with my diabetic care team. This change significantly reduced the logistical headache I anticipated. The compactness of the cartridges saved space in my luggage and streamlined the cooling process. With this modification, I managed to reduce the number of cooling wallets required from the initial estimate of 4-5 down to just 2. Additionally, I made sure to pack spare pens, as it's always better to be safe than sorry.\n **Managing Blood Sugar Levels:**\n Maintaining stable blood sugar levels while traveling was a top priority. For this, I employed Continuous Glucose Monitoring Systems (CGMS). These devices played a vital role in keeping me informed about my glucose levels throughout the day. To ensure their security, I carried cover plasters/stickers to keep them firmly in place, especially in hot and humid conditions that could cause them to peel off. For added peace of mind, I packed a backup blood test kit. While CGMS is incredibly helpful, having a reliable traditional blood glucose meter as a backup was essential, especially in situations where the CGMS might malfunction or require recalibration. \n \n**Travel Documents:**\n\n Traveling as a diabetic with insulin is easier when you're prepared with the right documents. I ensured I had a copy of my repeat prescription, as it serves as proof at airports that I was authorized to carry the necessary medication. This step helped mitigate any potential issues when going through security checkpoints. In addition, I obtained a letter from my consultant or diabetic specialist stating that I am a type 1 diabetic and need the medication I was carrying. This extra layer of documentation can be invaluable in case you encounter any challenges or questions while traveling. It's always better to be over-prepared in these situations to ensure a smooth and hassle-free journey.`,
//     author: "John Snow",
//     authorImg: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     postDate: "February 1, 2022"
//   });

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