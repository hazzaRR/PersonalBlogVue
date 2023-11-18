<template>

<div class="navbar bg-base-100 w border-y-2 border-white mb-6">
  <div class="flex-1">
    <router-link to="/" class="btn btn-ghost normal-case text-xl">Blog</router-link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li v-for="(link, index) in links" :key="index"><router-link :to="link.link">{{link.name}}</router-link></li>
    </ul>
  </div>
</div>
</template>

<script setup>

const props = defineProps(['links'])

console.log(props.links)

</script>

<style lang="scss" scoped>

</style>