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
      <template v-if="item">
        <input v-model="item.name">
        <textarea v-model="item.description" />
      </template>
    </EditorMain>
  </div>
</template>

<style lang="scss">
</style>