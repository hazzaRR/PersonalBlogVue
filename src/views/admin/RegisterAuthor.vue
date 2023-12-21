<template>
    <div>

        <section class="bg-white dark:bg-inherit">
    <div class="container flex items-center justify-center px-6 mx-auto">
        <form class="w-full max-w-md" @submit.prevent="registerAuthor">
            <div class="flex justify-center mx-auto">
                        <h1 class="w-auto h-7 sm:h-8 text-3xl font-black">
                        Re(a)dman
                        </h1>
                    </div>
            
            <div>
            <div class="relative flex items-center mt-8">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" v-model="authorDetails.username" :class="['block', 'w-full', 'py-3', 'text-gray-700', 'bg-white', 'border', 'rounded-lg', 'px-11', 'dark:bg-gray-900',
                 'dark:text-gray-300', 'dark:border-gray-600', 'focus:outline-none', 'focus:ring focus:ring-opacity-40', !usernameError ? ['focus:border-blue-400', 'dark:focus:border-blue-300', 'focus:ring-blue-300']: ['border-red-400', 'focus:border-red-400', 'focus:ring-red-300', 'dark:border-red-400', 'dark:focus:border-red-300']]" placeholder="Username">
            </div>
            <p  v-if="usernameError" class="mt-3 text-xs text-red-400">Username already taken</p>
            </div>

            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" v-model="authorDetails.firstname" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Firstname">
            </div>

            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" v-model="authorDetails.surname" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Surname">
            </div>

            <div>
            <div class="relative flex items-center  mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" v-model="authorDetails.email" :class="['block', 'w-full', 'py-3', 'text-gray-700', 'bg-white', 'border', 'rounded-lg', 'px-11', 'dark:bg-gray-900',
                 'dark:text-gray-300', 'dark:border-gray-600', 'focus:outline-none', 'focus:ring focus:ring-opacity-40', !emailError ? ['focus:border-blue-400', 'dark:focus:border-blue-300', 'focus:ring-blue-300']: ['border-red-400', 'focus:border-red-400', 'focus:ring-red-300', 'dark:border-red-400', 'dark:focus:border-red-300']]" placeholder="Email address">
            </div>
            <p  v-if="emailError" class="mt-3 text-xs text-red-400">Email already in use</p>
            </div>
            
            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" v-model="authorDetails.password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password">
            </div>
            
            <div class="relative flex items-center mt-4">
                <span class="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>
                
                <input type="password" v-model="retypePassword" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password">
            </div>
            
            <label for="dropzone-file" class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                <input id="dropzone-file" @change="handleFileChange($event)" type="file" accept="image/*" class="hidden" />
            </label>

            <div v-if="profile_pic" class="mt-6">
                <p href="#" class="text-sm text-blue-500 dark:text-blue-400">
                    Image uploaded: {{ profile_pic.name }}
                </p>
                </div>

            <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Register
                </button>
            </div>
        </form>
    </div>
</section>

    </div>
</template>

<script setup>
import {ref} from 'vue';
import { BASE_URL } from "../../config";
import { useAuthStore } from '../../stores/auth';


const auth = useAuthStore();
const retypePassword = ref('');
const profile_pic = ref(null);
const authorDetails = ref({
    username: "",
    firstname: "",
    surname: "",
    email: "",
    password: ""

});

const usernameError= ref(false);
const emailError= ref(false);

const handleFileChange = (event) => {
  const file = event.target.files;
  profile_pic.value = file[0];
};

const registerAuthor = async () => {

    if (authorDetails.value.password !== retypePassword.value) {
        alert("Password doesn't match")
    }
    else {

        
        const formData = new FormData();
        
        const jsonBlob = new Blob([JSON.stringify(authorDetails.value)], { type: 'application/json' });
        formData.append('authorDetails', jsonBlob);
        
        
        if (profile_pic.value !== null) {
            formData.append('profilePicture', profile_pic.value)
        }

        
        try {
            const response = await fetch(`${BASE_URL}/api/admin/register-author`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                },
                body: formData,
            });

            
            if (response.status === 200) {
                
                alert("Author successfully created");
                
                authorDetails.value = {
                    username: "",
                    firstname: "",
                    surname: "",
                    email: "",
                    password: ""
                }
                
                retypePassword.value = "";
                profile_pic.value = null;
                usernameError.value = false;
                emailError.value = false;
          
            }

            else if (response.status === 409) {
                const errorMessage = await response.text();

                if (errorMessage.includes('email')) {
                    emailError.value = true;
                    usernameError.value = false;
                }
                else if (errorMessage.includes('username')) {
                    usernameError.value = true;
                    emailError.value = false;
                }
            }
            
            
            
            console.log(response.status);
        
        } catch (error) {
            console.error('Error:', error);
        }

    }
}

</script>

<style lang="scss" scoped>

</style>