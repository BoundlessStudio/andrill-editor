<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import EditorMain from "@/components/EditorMain.vue"
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { useStore as useTilesetStore  } from "@/stores/TilesetEditor"

let tilesetStore = useTilesetStore()
const { item } = storeToRefs(tilesetStore)
provide('store', tilesetStore)
provide('prefix', "Environment")
provide('name', "Tileset")
// provide('help', "")

</script>

<template>
  <div class="flex">
    <EditorAside />
    <EditorMain>
      <form v-if="item">
        <div class="mb-6">
          <label for="name" class="my-label">Name</label>
          <input v-model="item.name" type="text" class="my-custom-input">
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