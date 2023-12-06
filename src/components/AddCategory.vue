<template>

        <input v-model="newCategory" type="text" id="title" placeholder="add new post category if it doesn't exist"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

        <button type="button" @click="addCategory"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add Category</span>
        </button>
</template>

<script setup>
import { BASE_URL } from "../config";
import { ref } from "vue";

const emit = defineEmits(['added-category'])
const newCategory = ref("");


const addCategory = async () => {

    if(newCategory.value != "") {

        try {
            const response = await fetch(`${BASE_URL}/api/category/`, {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({categoryName: newCategory.value})
            });
            // const data = await response.json();


            if (response.status === 200) {
                newCategory.value = ""
                emit('added-category')
            }
            
            } catch (error) {
            console.error('Error:', error);
            }

    }

}

</script>

<style lang="scss" scoped>

</style>