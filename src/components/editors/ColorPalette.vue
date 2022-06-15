<script setup lang="ts">
import { nanoid } from 'nanoid'
import { ref, toRefs, watch } from 'vue';

// https://aesoper101.github.io/vue3-colorpicker/?path=/story/example-colorpicker--circle&args=isWidget:true

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: nanoid()
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Array,
    required: true
  }
})

let { modelValue } = toRefs(props)
const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

watch(modelValue, (c) => {
  emit('update:modelValue', c as string[])
})
</script>

<template>
  <div class="mb-6">
    <label :for="props.id" class="my-label">{{ props.label }}</label>
    <div class="flex">
      <div v-for="(item, index) in modelValue" :key="index" class="flex-none px-1 w-8 h-8">
        <ColorPicker v-model:pureColor="modelValue[index]" v-model:gradientColor="gradientColor" :is-widget="false" picker-type="chrome" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-label {
 @apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
}
</style>