<template>

<SkeletonParagraph v-if="postDetails === null" />

  <div v-else class="bg-white dark:bg-inherit">
    <div class="flex justify-center">
      <div class="flex items-center w-full max-w-2xl px-6 mx-auto">
        <div class="flex-1">
          <div class="text-center">
            <h1 class="text-3xl font-black mt-3 text-gray-500 dark:text-gray-300">
              Edit post
            </h1>
          </div>

          <div class="mt-8">
            <img class="object-cover w-full rounded-xl h-72 lg:h-96 mb-6" :src="postDetails.bannerImage ? getImageSrc(postDetails.bannerImage): defaultImage" :alt="postDetails.altText">
            <form @submit.prevent="submitForm">
              <div>
                <label for="title" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Post Title</label>
                <input v-model="postDetails.title" type="text" id="title" placeholder="A brand new world"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div class="mt-6">
                <label for="banner_image" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Update Banner Image</label>
                <input @change="handleFileChange($event)" type="file" id="banner_image" accept="image/*"
                  class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />


                <label for="banner_image_alt" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Alt Text</label>
                <input v-model="postDetails.altText" type="text" id="banner_image_alt"
                  placeholder="Alt text for the banner image"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />


              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="content" class="text-sm text-gray-600 dark:text-gray-200">Blog Content</label>
                </div>
                <div>
                  <textarea v-model="postDetails.content" placeholder="lorem..."
                    class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                  <p class="mt-3 text-xs text-gray-400 dark:text-gray-600">
                    To write blog posts use markdown language to format the text
                  </p>
                </div>
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="content" class="text-sm text-gray-600 dark:text-gray-200">Categories</label>
                </div>

                <div class="form-control grid grid-cols-2">
                  <label v-for="category in categories" :key="category.categoryId" class="label cursor-pointer">
                    <span class="label-text ml-2">{{ category.categoryName }}</span>
                    <input type="checkbox" :value="category" v-model="postDetails.categories"
                      class="checkbox checkbox-sm" />
                  </label>
                </div>

                <AddCategory @added-category="getCategories" />

              </div>

              <div class="form-control mt-6">
                <label class="label cursor-pointer">
                  <span class="label-text">Make post private</span>
                  <input type="checkbox" class="toggle bg-blue-500 to-blue-500" checked
                    v-model="postDetails.privatePost" />
                </label>
              </div>

              <div class="mt-6">
                <button type="submit"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getPost} from '../../composables/getPost'; 
import {getCategories} from '../../composables/getCategories'; 
import {updatePost} from '../../composables/updatePost'; 
import {getImageSrc} from '../../composables/ConvertByteArrayToImage';
import SkeletonParagraph from '../../components/SkeletonParagraph.vue'; 
import AddCategory from '../../components/AddCategory.vue'; 
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(['id'])
const postDetails = ref(null);
const categories = ref(null);


const defaultImage = ref("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
const banner_image = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files;
  banner_image.value = file[0];
};

onMounted(async () => {
    postDetails.value = await getPost(props.id);
    categories.value = await getCategories();
});


const submitForm = async () => {
  const response = await updatePost(props.id, postDetails.value, banner_image.value);
  router.push(`/dashboard/manage-posts`);
  
}

</script>
