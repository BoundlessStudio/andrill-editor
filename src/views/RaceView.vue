<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import { useStore as useStoreRace } from "@/stores/RaceEditor"
import { storeToRefs } from "pinia";
import { provide } from "vue";

const storeRace = useStoreRace()
const { item } = storeToRefs(storeRace)
provide('store', storeRace)

</script>

<template>
  <div class="flex">
    <EditorAside name="Civilization / Races" />
    <section class="grow h-95v">
      <template v-if="item">
        <!-- TOOD -->
        <!-- Editor -->
        <div class="p-3 h-15 bg-white rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ item.name }} {{ item.id }}
          </p>
        </div>
        <div class="p-3 mt-3 bg-white rounded border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700">
          <div class="h-85v overflow-y-auto">
            <input v-model="item.name" type="text">
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Create Component -->
        <div class="grid place-items-center h-screen">
          <div class="block p-3 m-3 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 max-w-lg">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              No Race Selected
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus erat, auctor eget semper eget, ullamcorper nec orci. Quisque nec ipsum lacus. 
              Vivamus laoreet sagittis eleifend. Etiam hendrerit, sem nec ultricies dignissim, ex lacus tempus sapien, sit amet vehicula velit tortor quis turpis. 
              Praesent auctor lectus sed nisl tristique, et viverra nisi laoreet. Ornare libero quis bibendum vehicula. 
              Vivamus id ante aliquam, ultrices elit egestas, porta quam. Nulla quis aliquet mi. Proin vitae aliquam augue.
            </p>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<style lang="scss">
</style>