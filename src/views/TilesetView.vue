<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import { useStore } from "@/stores/TilesetEditor"
import { storeToRefs } from "pinia";
import { provide } from "vue";

const store = useStore()
const { item } = storeToRefs(store)

// https://vuejs.org/api/composition-api-dependency-injection.html
provide('store', store)
</script>

<template>
  <div class="flex">
    <EditorAside name="Environment / Tilesets" />
    <section>
      <p>{{ item?.name ?? "None" }} {{ item?.id ?? "" }}</p>
      <!-- TOOD -->
      <!-- Editor -->
    </section>
  </div>
</template>

<style lang="scss">

</style>