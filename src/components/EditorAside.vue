<script setup lang="ts">
import type { IStoreGeneric } from "@/stores/StoreFactory";
import { storeToRefs } from "pinia";
import { watch, ref, inject } from "vue"; // , reactive
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const route = useRoute()
const route_name = route.name?.toString()

const store = inject('store') as IStoreGeneric
const { collection } = storeToRefs(store)

const prefix = inject('prefix') as string
const name = inject('name') as string

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
  // console.log("Route", { route_name, id });
  router.push({ name: route_name, params: { id } })
}

if(route.params.id) {
  let id = route.params.id as string
  store.select(id)
}

</script>

<template>
  <aside class="w-64 h-95v mr-3">
    <div class="p-3 h-15 bg-white rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <p class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        <router-link to="/">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:underline">Andrill</span>
        </router-link>
      </p>
    </div>
    <div class="p-3 h-15 mt-3 bg-white rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="h-85v">
        <div class="h-10v">
          <ul class="space-y-1">
            <li class="pl-2">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:underline cursor-pointer" @click="clear">{{ prefix }} / {{ name }}</span>
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
        </div>
        <div class="h-75v overflow-y-auto overflow-x-hidden border-t border-b border-gray-200 dark:border-gray-700 ">
          <ul class="space-y-1dark:text-white  ">
            <template v-for="item in collection" :key="item.id">
              <li class="w-56 p-2">
                <div class="flex">
                  <div class="w-48 truncate">
                    <span class="hover:underline cursor-pointer" @click="selectItem(item.id)">
                      {{ item.name || "[Item]" }}
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
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.my-search {
  @apply flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>