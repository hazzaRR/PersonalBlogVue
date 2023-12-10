<template>
  
  <div class="navbar relative bg-white shadow dark:bg-gray-800">
  <div class="flex-1">
    <router-link to="/">
                    <!-- <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> -->
                    <h1 class="w-auto h-6 sm:h-7 text-lg font-bold">
                        Re(a)dman
                    </h1>
                </router-link>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/src/assets/blank_avatar.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li v-for="(tool, index) in tools" :key="index"><router-link :to="tool.link">{{tool.name}}</router-link></li>
        <li @click="logout"><p>Logout</p></li>
      </ul>
    </div>
  </div>
</div>

</template>

<script setup>

const props = defineProps(['links', "tools"])

const logout = () => {
  console.log("logout")
}

</script>

<style lang="scss" scoped>

</style>