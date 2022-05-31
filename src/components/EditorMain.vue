<script setup lang="ts">
import NothingSelected from "@/components/NothingSelected.vue"
import type { IStoreGeneric } from "@/stores/StoreFactory";
import { storeToRefs } from "pinia";
import { inject } from "vue";

const store = inject('store') as IStoreGeneric
const { item } = storeToRefs(store)
</script>

<template>
  <section class="grow h-95v">
    <template v-if="item">
      <div class="p-3 h-15 bg-white rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.id }} {{ item.name }}
        </p>
      </div>
      <div class="p-3 mt-3 bg-white rounded border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700">
        <div class="h-85v overflow-y-auto">
          <slot />
        </div>
      </div>
    </template>
    <template v-else>
      <NothingSelected />
    </template>
  </section>
</template>

<style lang="scss">
</style>