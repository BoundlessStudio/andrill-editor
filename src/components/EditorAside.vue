<script setup lang="ts">
import { storeToRefs, type StoreGeneric } from "pinia";
import { watch, ref, inject } from "vue"; // , reactive
import { useRoute, useRouter } from "vue-router";

const props = defineProps<{
  name: string
}>()

// const emit = defineEmits<{
//   (e: 'new'): void
//   (e: 'delete', id: string): void
//   (e: 'selected', id: string): void
//   (e: 'search', term: string): void
// }>()

const router = useRouter()
const route = useRoute()
const route_name = route.name?.toString()

const store = inject('store') as StoreGeneric
const { collection } = storeToRefs(store)

const term = ref("")
watch(term, (current) => {
  const searchingFor = current.toLowerCase()
  store.search(searchingFor)
})

watch(
  () => route.params.id,
  (id) => {
    term.value = ""
    store.select(id as string)
  }
)

function clear () {
  router.push({ name: route_name })
}

function newItem () {
  const id = store.add()
  selectItem(id)
}

function deleteItem (id: string) {
  store.delete(id)
  clear()
}

function selectItem (id: string) {
  router.push({ name: route_name, params: { id } })
}

</script>

<template>
  <aside class="w-64">
    <div class="overflow-y-auto py-2 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
      <ul class="space-y-2">
        <li class="pl-1">
          <router-link to="/">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:underline">Andrill</span>
          </router-link>
        </li>
      </ul>
      <ul class="space-y-1 pt-2 mt-4 border-t border-gray-200 dark:border-gray-700">
        <li class="pb-2 pl-1">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:underline cursor-pointer" @click="clear">{{ props.name }}</span>
        </li>
        <li class="w-56">
          <div class="flex w-full">
            <div class="w-48 p-2">
              <input v-model="term" type="search" class="my-search" placeholder="Search...">
            </div>
            <div>
              <button class=" text-white font-bold pt-4 pl-1 rounded" title="New" @click="newItem">
                <font-awesome-icon icon="plus" class="text-green-400 hover:text-green-300" />
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="pt-2 mt-4 space-y-1 border-t border-gray-200 dark:border-gray-700 dark:text-white">
        <div>
          <template v-for="item in collection" :key="item.id">
            <li class="w-56 p-2">
              <div class="flex">
                <div class="w-48 truncate">
                  <span class="hover:underline cursor-pointer" @click="selectItem(item.id)">
                    {{ item.name }}
                  </span>
                </div>
                <div>
                  <button class="text-white font-bold px-2 rounded" title="Delete" @click="deleteItem(item.id)">
                    <font-awesome-icon icon="times" class="text-red-400 hover:text-red-300" />
                  </button>
                </div>
              </div>
            </li>
          </template>
        </div>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss">
.my-search {
  @apply block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>