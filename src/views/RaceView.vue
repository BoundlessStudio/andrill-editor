<script setup lang="ts">
// TODO:
</script>

<template>
  <div class="flex">
    <aside
      class="w-64"
      aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
        <router-link
          to="/"
          class="flex items-center pl-2.5 mb-5">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Andrill</span>
        </router-link>
        <ul class="space-y-2">
          <li>
            <input
              id="search-navbar"
              type="text"
              class="dsjko49df"
              placeholder="Find...">
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <font-awesome-icon icon="plus" />
              <span class="ml-3">New</span>
            </router-link>
          </li>
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <router-link
              to="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Item</span>
            </router-link>
          </li>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </aside>
    <section />
  </div>
</template>

<style lang="scss">
.dsjko49df {
  @apply block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>