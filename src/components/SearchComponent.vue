<script lang="ts">
import { watch, defineComponent } from "vue"; // computed, ref,
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/GlobalSearch";

// onBeforeRouteLeave((to, from) => {
//   const answer = window.confirm(
//     'Do you really want to leave? you have unsaved changes!'
//   )
//   // cancel the navigation and stay on the same page
//   if (!answer) return false
// })

export default defineComponent({
  setup () {
    const store = useStore();
    const { term, hasResults, results } = storeToRefs(store);

    watch(term, (current) => {
      const searchingFor = current.toLowerCase();
      if (searchingFor.length > 2) {
        store.search(searchingFor);
      } else {
        store.clear();
      }
    });

    let onReset = () => store.$reset();

    return {
      term,
      hasResults,
      results,
      onReset,
    };
  },
});
</script>

<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input
          v-model="term"
          type="search"
          class="my-search form-control"
          placeholder="Search Database">
      </div>
    </div>
  </div>
  <div class="h-24">
    <div
      v-if="hasResults"
      class="flex justify-center">
      <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        <template
          v-for="item in results"
          :key="item.name">
          <router-link
            :to="item.path"
            @click="onReset">
            <li class="grid grid-cols-2 gap-4 px-6 py-2 border-b border-gray-200 w-full cursor-pointer">
              <div>
                <font-awesome-icon
                  :icon="item.icon"
                  class="pr-2" />
                <span>{{ item.name }}</span>
              </div>
            </li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.my-search {
    @apply relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>