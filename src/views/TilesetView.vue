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
      <template v-if="item">
        <input v-model="item.name">
      </template>
    </EditorMain>
  </div>
</template>

<style lang="scss">

</style>