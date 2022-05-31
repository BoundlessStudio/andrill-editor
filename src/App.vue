<script setup lang="ts">
import { RouterView } from "vue-router"; //RouterLink
</script>

<template>
  <div class="antialiased font-pixel text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-screen p-3">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
@import "@/assets/styles/tailwind.scss";
</style>