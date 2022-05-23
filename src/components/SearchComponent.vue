<script lang="ts">
import { useRouter, onBeforeRouteUpdate, type RouteRecordNormalized } from 'vue-router'
import { watch, computed, ref, defineComponent } from "vue";

function fitlerRoute(route: RouteRecordNormalized, searchingFor: string): boolean {
  if (searchingFor == undefined || searchingFor == "")
    return false

  if (route.name == undefined)
    return false

  return route.name.toString().toLowerCase().startsWith(searchingFor)
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()

    const search = ref("")
    const collection = ref(new Array<RouteRecordNormalized>())
    const hasResults = computed(() => collection.value.length > 0)

    watch(search, (current) => {
      const searchingFor = current.toLowerCase()
      collection.value = routes.filter(_ => fitlerRoute(_, searchingFor))
    })

    // onBeforeRouteLeave((to, from) => {
    //   const answer = window.confirm(
    //     'Do you really want to leave? you have unsaved changes!'
    //   )
    //   // cancel the navigation and stay on the same page
    //   if (!answer) return false
    // })

    onBeforeRouteUpdate(async (to, from) => {
      search.value = ""
    })

    function navTo(route: RouteRecordNormalized) {
      router.push(route)
    }

    return {
      search,
      hasResults,
      collection,
      navTo
    }
  }
})
</script>

<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input v-model="search" type="search" class="my-search form-control" placeholder="Search Database">
      </div>
    </div>
  </div>
  <div class="h-24">
    <div v-if="hasResults" class="flex justify-center">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        <template v-for="item in collection">
          <li @click="navTo(item)" class="px-6 py-2 border-b border-gray-200 w-full cursor-pointer">
            <font-awesome-icon :icon="item.meta.icon" class="pr-2"></font-awesome-icon>
            <span>{{ item.name }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.my-search {
  @apply relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0;
}

.my-search:focus {
  @apply text-gray-700 bg-white border-blue-600 outline-none;
}
</style>