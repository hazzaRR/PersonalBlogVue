<template>
 <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Password</h2>
    
    <form @submit.prevent="updatePassword">
        <div class="grid grid-cols-1 gap-6 mt-4 px-10">

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Current Password</label>
                <input v-model="currentPassword" id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">New Password</label>
                <input v-model="newPassword" id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Confirm New Password</label>
                <input v-model="confirmNewPassword" id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>
        </div>


        <div class="flex justify-center mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
</template>

<script setup>
import { BASE_URL } from "../config";
import {ref, onMounted} from 'vue';
import { useAuthStore } from '../stores/auth';


const auth = useAuthStore();
const currentPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");

const updatePassword = async () => {

    if (currentPassword.value === "" || newPassword.value === "" || confirmNewPassword.value === "" ) {
        alert("all fields must be filled in");
    }


    if (newPassword.value != confirmNewPassword.value) {
        alert("New Passwords must be the same");
    }

    try {

    const response = await fetch(`${BASE_URL}/api/user/update-password`, {
                method: 'PUT```````',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                },
                body: JSON.stringify({username: auth.username , password: currentPassword.value, newPassword: newPassword.value}),
            });

            
            if (response.status === 200) {
                
                alert("Password updated");
        
            }
            else {
                alert("incorrect password inputted");
            }
        
        } catch (error) {
            console.error('Error:', error);
        }


};



</script>

<style lang="scss" scoped>

</style>