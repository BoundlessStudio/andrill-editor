<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref } from 'vue';

const props = defineProps<{
  id?: string
  label: string
  rows?: number
  modelValue: string
}>()

const id = ref(props.id || nanoid())
const rows = ref(props.rows || 10)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event:Event) => {
  var target = event?.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>

<template>
  <div class="mb-6">
    <label :for="id" class="my-label">{{ props.label }}</label>
    <textarea :id="id" :value="props.modelValue" :rows="rows" class="my-textarea" @input="updateValue" />
  </div>
</template>

<style lang="scss" scoped>
.my-label {
 @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
.my-textarea {
  @apply flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>