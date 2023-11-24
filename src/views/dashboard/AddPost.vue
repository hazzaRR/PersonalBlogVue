<template>
  <div>
    <h1>Add Post Page</h1>
    <div class="container mx-auto px-4 justify-center content-center">
      <input type="text" placeholder="title" class="input input-bordered input-primary w-full max-w-xs" v-model="postTitle"/>
      <label for="post-content">Content</label>
      <textarea id="post-content"></textarea>
      <button>Add Post</button>

    </div>
  </div>
</template>

<script setup>
</script>
