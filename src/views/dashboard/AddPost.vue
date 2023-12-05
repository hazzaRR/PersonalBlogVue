<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="flex items-center w-full max-w-2xl px-6 mx-auto">
        <div class="flex-1">
          <div class="text-center">
            <h1 class="text-xl mt-3 text-gray-500 dark:text-gray-300">
              Create new post
            </h1>
          </div>

          <div class="mt-8">
            <form @submit.prevent="submitForm">
              <div>
                <label for="title" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Post Title</label>
                <input v-model="postDetails.title" type="text" id="title" placeholder="A brand new world"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div class="mt-6">
                <label for="banner_image" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Banner Image</label>
              <input @change="handleFileChange($event)" type="file" id="banner_image"
                                  accept="image/*"
                                  class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />

              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="content" class="text-sm text-gray-600 dark:text-gray-200">Blog Content</label>
                </div>
                <div>
                  <textarea v-model="postDetails.content" placeholder="lorem..."
                    class="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                  <p class="mt-3 text-xs text-gray-400 dark:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <!-- <div class="flex flex-col mt-6">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th scope="col"
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Upload images
                            </th>

                            <th scope="col"
                              class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Image Reference
                            </th>
                            <th scope="col" class="relative py-3.5 px-4">
                              <span class="sr-only">Delete</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                          <tr v-for="(img, index) in images" :key="index">
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                              <div>
                                <input @change="handleFileChange($event, index)" type="file" :id="'image' + index"
                                  accept="image/*"
                                  class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300" />
                              </div>
                            </td>
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <div>
                                <input v-model="img.fileName" type="text" id="imgName" placeholder="img_1"
                                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                            </td>
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <button type="button" @click="removeImage(index)"
                                class="ml-2 text-sm text-red-500 underline cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                  class="w-6 h-6 mt-2">
                                  <path fill-rule="evenodd"
                                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                    clip-rule="evenodd" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              Add button to dynamically add more file input fields
              <button type="button" @click="addImageInput"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add another image</span>
              </button> -->

              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Make post private</span>
                  <input type="checkbox" class="toggle bg-blue-500 to-blue-500" checked v-model="postDetails.privatePost" />
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
import { ref } from "vue";
import { BASE_URL } from "../../config"; //


const postDetails = ref({
  title: "",
  content: "",
  author: "",
  categories: [],
  date: new Date().toJSON(),
  privatePost: false
});

const banner_image = ref(null);

//table for multiple photos

// const images = ref([{ file: null, fileName: null }])

// const handleFileChange = (event, index) => {
//   console.log(event);
//   console.log(index);
//   const files = event.target.files;
//   console.log(files);
//   images.value[index].file = files[0];
// };

// const addImageInput = () => {
//   images.value.push({ file: null, fileName: null });
// };

// const removeImage = (index) => {
//   images.value.splice(index, 1);
// };

const handleFileChange = (event) => {
  console.log(event);
  const file = event.target.files;
  banner_image.value = file[0];
};

const submitForm = async () => {
  // Create a new FormData object
const formData = new FormData();

//for multiple images
// Append each image to the FormData with the key "images"
// images.value.forEach((image, index) => {
//   console.log(image)
//   formData.append('images', image.file);
// });

// Append the JSON object as a blob
const jsonBlob = new Blob([JSON.stringify(postDetails.value)], { type: 'application/json' });
formData.append('postDetails', jsonBlob);


console.log(banner_image.value);


if (banner_image.value.file !== null) {
  formData.append('bannerImage', banner_image.value)
}


// // Make a fetch request
// fetch(`${BASE_URL}/api/posts/`, {
//   method: 'POST',
//   body: formData,
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Response:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
};
</script>
