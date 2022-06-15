<script setup lang="ts">
import { watch, computed } from "vue"; // computed, ref,
import { storeToRefs } from "pinia";
import { SearchResult, useStore } from "@/stores/GlobalSearch";
import { useRoute, useRouter } from "vue-router";
// import { faSleigh } from "@fortawesome/free-solid-svg-icons";

const router = useRouter()
const route = useRoute()
const store = useStore()
const { term, results } = storeToRefs(store);
const hasResults = computed(() => results.value.length > 0)

watch(term, (current) => {
  const searchingFor = current.toLowerCase();
  if (searchingFor.length > 2) {
    store.search(searchingFor)
  } else {
    store.clear()
  }
})

watch(() => route.name, () => {
  store.search("")
  store.clear()
})

function select (result: SearchResult) {
  store.search("")
  router.push(result.path)
}

</script>

<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input v-model="term" type="search" class="my-search form-control" placeholder="Search Database">
      </div>
    </div>
  </div>
  <div class="h-24">
    <div v-if="hasResults" class="flex justify-center">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        <template v-for="result in results" :key="result.path">
          <a href="#" @click="select(result)">
            <li class="grid grid-cols-1 gap-4 px-6 py-2 border-b border-gray-200 w-full cursor-pointer">
              <div>
                <font-awesome-layers>
                  <font-awesome-icon v-for="icon in result.icons" :key="icon" :icon="icon" />
                </font-awesome-layers>
                <span class="pl-2">{{ result.editor }}</span>
                <span v-if="result.item"> - {{ result.item }}</span>
              </div>
            </li>
          </a>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-search {
    @apply relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>