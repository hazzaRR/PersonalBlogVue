<template>

  
  <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
    
    <img class="object-cover w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto" :src="userDetails.profilePicture ? getImageSrc(userDetails.profilePicture): '/src/assets/blank_avatar.jpg'">
    <form @submit.prevent="updateUserDetails">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            <!-- <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                <input v-model="userDetails.username" id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div> -->

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                <input v-model="userDetails.email" id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="firstname">Firstname</label>
                <input v-model="userDetails.firstname" id="firstname" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="surname">Surname</label>
                <input v-model="userDetails.surname" id="surname" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="profilePicture">Profile Picture</label>
                <input @change="handleFileChange($event)" type="file" id="profilePicture" accept="image/*"
                  class="block w-full px-4 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-500 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-inherit dark:focus:border-blue-300" />
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                <input v-model="password" id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>
            <div>
            <p class="py-2 mt-0 md:mt-8 text-sm text-center text-gray-400">Changed password? <router-link to="/settings/change-password" class="text-blue-500 focus:outline-none focus:underline hover:underline">Click here</router-link>.</p>
            </div>
        </div>


        <div class="flex justify-center md:justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
  
</template>

<script setup>
import { BASE_URL } from "../config";
import {ref, onMounted} from 'vue';
import { useAuthStore } from '../stores/auth';
import {getImageSrc} from '../composables/ConvertByteArrayToImage';
import {updateAccount} from '../composables/updateAccount';


const auth = useAuthStore();


onMounted(async () => {
  const response = await fetch(`${BASE_URL}/api/user/${auth.username}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
  });


  if (response.status === 200) {
    userDetails.value = await response.json();
  }


})

const profile_pic = ref(null);
const password = ref("");

const handleFileChange = (event) => {
  const file = event.target.files;
  profile_pic.value = file[0];
};


const userDetails = ref({
  username: "",
  firstname: "",
  surname: "",
  email: "",
  profilePicture: ""
})

const updateUserDetails = async () => {

  if (password.value == "") {
    alert("password cannot be empty")
  }
  else {
    
    console.log(profile_pic.value)
    const response = await updateAccount({
      firstname: userDetails.value.firstname,
      surname: userDetails.value.surname,
      email: userDetails.value.email,
      password: password.value}, profile_pic.value);

      if (response !== 401) {
        userDetails.value = response;
        profile_pic.value = null;
      }

    password.value = "";
    }
}


  
</script>