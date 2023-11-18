<template>
  
  <h1>User Settings</h1>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">What is your name?</span>
  </label>
  <input type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs" v-model="username"/>
  </div>
  <input type="text" placeholder="First name" class="input input-bordered input-primary w-full max-w-xs" />
  <input type="text" placeholder="Surname" class="input input-bordered input-primary w-full max-w-xs" />
  <input type="text" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
  
</template>

<script setup>

import {ref} from 'vue';

const username = ref("hazr")

  
</script>