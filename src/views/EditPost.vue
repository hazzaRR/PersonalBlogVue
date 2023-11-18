<template>
  <div>
    <h1>Edit Post Page</h1>
    
    <h2>{{props.id}}</h2>
    <form>
      <label for="post-title">Title</label>
      <input type="text" id="post-title" />
      <label for="post-content">Content</label>
      <textarea id="post-content"></textarea>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['id'])
</script>
