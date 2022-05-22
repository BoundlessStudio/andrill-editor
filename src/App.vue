<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container mx-auto">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <section class="container mx-auto">
    <RouterView />
  </section>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/tailwind.css";
@import "@formkit/themes/genesis";
</style>
