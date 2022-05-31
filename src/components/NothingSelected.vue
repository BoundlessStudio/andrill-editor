<script setup lang="ts">
import { inject } from 'vue';
const name = inject('name') as string
const help = inject('help') as string
</script>

<template>
  <div class="grid place-items-center h-95v">
    <div class="block p-3 m-3 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 max-w-lg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        No {{ name }} Selected
      </h5>
      <p v-if="help" class="font-normal text-gray-700 dark:text-gray-400">
        {{ help }}
      </p>
      <p v-else class="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus erat, auctor eget semper eget, ullamcorper nec orci. Quisque nec ipsum lacus. 
        Vivamus laoreet sagittis eleifend. Etiam hendrerit, sem nec ultricies dignissim, ex lacus tempus sapien, sit amet vehicula velit tortor quis turpis. 
        Praesent auctor lectus sed nisl tristique, et viverra nisi laoreet. Ornare libero quis bibendum vehicula. 
        Vivamus id ante aliquam, ultrices elit egestas, porta quam. Nulla quis aliquet mi. Proin vitae aliquam augue.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
</style>