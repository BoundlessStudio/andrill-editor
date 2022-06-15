<script setup lang="ts">
import EditorAside from "@/components/EditorAside.vue"
import EditorMain from "@/components/EditorMain.vue"
import SingleLineText from "@/components/editors/SingleLineText.vue"
import MulitpleLineText from "@/components/editors/MulitpleLineText.vue"
import RangeSlider from "@/components/editors/RangeSlider.vue"
import NumberSpinner from "@/components/editors/NumberSpinner.vue"
import ColorSelection from "@/components/editors/ColorSelection.vue"
import GradientSelection from "@/components/editors/GradientSelection.vue"
// import ColorPalette from "@/components/editors/ColorPalette.vue"
import ChoiceSelection from "@/components/editors/ChoiceSelection.vue"
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { useStore as useStoreRace } from "@/stores/RaceEditor"

let raceStore = useStoreRace()
const { item } = storeToRefs(raceStore)
provide('store', raceStore)
provide('prefix', "Civilization")
provide('name', "Race")
provide('help', "This is a friendly little box that will tell the you hwo a Race works")
</script>

<template>
  <div class="flex">
    <EditorAside />
    <EditorMain>
      <form v-if="item">
        <div class="flex">
          <div class="flex-auto px-2">
            <SingleLineText v-model="item.name" label="Name" />
            <MulitpleLineText v-model="item.description" label="Description" />
          </div>
          <div class="flex-auto px-2">
            <RangeSlider v-model="item.range" label="range" />
            <NumberSpinner v-model="item.range" label="range" />
            <ColorSelection v-model="item.color" label="color" />
            <GradientSelection v-model="item.gradient" label="gradient" />
            <!-- <ColorPalette v-model="item.palette" label="palette" /> -->
            <ChoiceSelection v-model="item.option" label="option" :options="['hero', 'mobs']" />
          </div>
        </div>
      </form>
    </EditorMain>
  </div>
</template>

<style lang="scss" scoped>
</style>