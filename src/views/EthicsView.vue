<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import EditorMain from "@/components/EditorMain.vue"
import SingleLineText from "@/components/editors/SingleLineText.vue"
import MulitpleLineText from "@/components/editors/MulitpleLineText.vue"
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { useStore as useStoreEthics } from "@/stores/EthicsEditor"

let ethicsStore = useStoreEthics()
const { item } = storeToRefs(ethicsStore)
provide('store', ethicsStore)
provide('prefix', "Abstract")
provide('name', "Ethic")
provide('help', "This is a friendly little box that will tell the you how ethics works")

</script>

<template>
  <div class="flex">
    <EditorAside />
    <EditorMain>
      <form v-if="item">
        <SingleLineText v-model="item.name" label="Name" />
        <MulitpleLineText v-model="item.description" label="Description" />
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