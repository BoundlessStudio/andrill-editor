<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import EditorMain from "@/components/EditorMain.vue"
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { useStore as useStoreRace } from "@/stores/RaceEditor"

let raceStore = useStoreRace()
const { item } = storeToRefs(raceStore)
provide('store', raceStore)
provide('prefix', "Civilization")
provide('name', "Race")
provide('help', "This is a friendly little box that will tell the you hwo a Race works")

</script>

<template>
  <div class="flex">
    <EditorAside />
    <EditorMain>
      <form v-if="item">
        <div class="mb-6">
          <label for="email" class="my-label">Name</label>
          <input v-model="item.name" type="text" required class="my-custom-input">
        </div>
        <div class="mb-6">
          <label for="password" class="my-label">Description</label>
          <textarea v-model="item.description" class="my-custom-input" />
        </div>
      </form>
    </EditorMain>
  </div>
</template>

<style lang="scss" scoped>
.my-label {
 @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
.my-custom-input {
  @apply flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>