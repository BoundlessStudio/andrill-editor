<script setup lang="ts">
// import type { ColorInputWithoutInstance } from 'tinycolor2';
import { nanoid } from 'nanoid'
import { ref } from 'vue';

// https://aesoper101.github.io/vue3-colorpicker/?path=/story/example-colorpicker--gradient

const props = defineProps<{
  id?: string
  label: string
  widget?: boolean
  modelValue: string
}>()

const id = ref(props.id || nanoid())
const widget = ref(props.widget || false)

const emit = defineEmits<{
  (e: 'update:modelValue', gradient: string): void
}>()

const updateValue = (gradient:string) => {
  emit('update:modelValue', gradient)
}
</script>

<template>
  <div class="mb-6">
    <label :for="id" class="my-label">{{ props.label }}</label>
    <div class="w-8 h-8">
      <ColorPicker
        :id="id"
        use-type="gradient"
        :gradient-color="props.modelValue"
        :label="label"
        :is-widget="widget"
        @gradient-color-change="updateValue" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-label {
 @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
</style>