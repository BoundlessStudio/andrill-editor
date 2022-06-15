<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref } from 'vue'

const props = defineProps<{
  id?: string
  label: string
  options: Array<string>
  modelValue: string
}>()

const id = ref(props.id || nanoid())

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const updateValue = (event:Event) => {
  var target = event?.target as HTMLInputElement
  emit('update:modelValue', parseFloat(target?.value))
}
</script>

<template>
  <div class="mb-6">
    <div>
      <label :for="id" class="my-label">{{ props.label }}</label>
    </div>
    <div class="flex">
      <select :id="id" :value="props.modelValue" class="my-input" @change="updateValue">
        <option value="">
          Selection Option
        </option>
        <option value="0">
          Zero
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-label {
 @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
.my-input {
  @apply flex-auto min-w-0 block w-full px-3 mr-3 py-1 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
.my-badge {
  @apply font-semibold inline-block py-1 px-1 rounded text-neutral-600 bg-neutral-200  uppercase last:mr-0 mr-1
}

</style>