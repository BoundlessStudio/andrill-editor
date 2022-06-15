import router from "@/router/"
import { defineStore } from "pinia"
import type { RouteRecordNormalized } from "vue-router"
import type { IStoreGeneric } from "./StoreFactory"
//import type { IEntity } from "./IEntity"
import { useStore as useStoreActorsEditor } from "@/stores/ActorsEditor"
import { useStore as useStoreAttributesEditor } from "@/stores/AttributesEditor"
import { useStore as useStoreBeliefsEditor } from "@/stores/BeliefsEditor"
import { useStore as useStoreBiomesEditor } from "@/stores/BiomesEditor"
import { useStore as useStoreDialogEditor } from "@/stores/DialogEditor"
import { useStore as useStoreGoalsEditor } from "@/stores/GoalsEditor"
import { useStore as useStoreHooksEditor } from "@/stores/HooksEditor"
import { useStore as useStoreMaterialsEditor } from "@/stores/MaterialsEditor";
import { useStore as useStoreMilitaryEditor } from "@/stores/MilitaryEditor"
import { useStore as useStoreNeedsEditor } from "@/stores/NeedsEditor"
import { useStore as useStoreRaceEditor} from "@/stores/RaceEditor"
import { useStore as useStoreReligionsEditor } from "@/stores/ReligionsEditor"
import { useStore as useStoreSitesEditor } from "@/stores/SitesEditor"
import { useStore as useStoreSkillsEditor } from "@/stores/SkillsEditor"
import { useStore as useStoreStagesEditor } from "@/stores/StagesEditor"
import { useStore as useStoreStatusEditor } from "@/stores/StatusEditor"
import { useStore as useStoreThoughtsEditor } from "@/stores/ThoughtsEditor"
import { useStore as useStoreTilesetEditor } from "@/stores/TilesetEditor"
import { useStore as useStoreVerbsEditor } from "@/stores/VerbsEditor"
import { useStore as useStoreWildlifeEditor } from "@/stores/WildlifeEditor"

export class SearchResult {
  public path: string;
  public editor: string;
  public icons: Array<string>;
  public item: string | undefined

  constructor (route: RouteRecordNormalized, id = "", name: string| undefined = undefined) {
    this.editor = route.name?.toString() || ""
    this.icons = route.meta.icons
    this.path = route.path.replace(":id?", id)
    this.item = name
  }
}

function addToStores (stores: Map<string, IStoreGeneric>, store: IStoreGeneric): void {
  store.search("")
  stores.set(store.$id, store)
}

export const useStore = defineStore({
  id: "Search",
  state: () => ({
    term: "",
    hasResults: false,
    results: new Array<SearchResult>(),
  }),
  //getters: {},
  actions: {
    clear () {
      this.hasResults = false
      this.results = []
    },
    search (term: string) {
      this.hasResults = false
      this.results = []

      const stores = new Map<string, IStoreGeneric>()
      addToStores(stores, useStoreActorsEditor())
      addToStores(stores, useStoreAttributesEditor())
      addToStores(stores, useStoreBeliefsEditor())
      addToStores(stores, useStoreBiomesEditor())
      addToStores(stores, useStoreDialogEditor())
      addToStores(stores, useStoreGoalsEditor())
      addToStores(stores, useStoreHooksEditor())
      addToStores(stores, useStoreMaterialsEditor())
      addToStores(stores, useStoreMilitaryEditor())
      addToStores(stores, useStoreNeedsEditor())
      addToStores(stores, useStoreRaceEditor())
      addToStores(stores, useStoreReligionsEditor())
      addToStores(stores, useStoreSitesEditor())
      addToStores(stores, useStoreSkillsEditor())
      addToStores(stores, useStoreStagesEditor())
      addToStores(stores, useStoreStatusEditor())
      addToStores(stores, useStoreThoughtsEditor())
      addToStores(stores, useStoreTilesetEditor())
      addToStores(stores, useStoreVerbsEditor())
      addToStores(stores, useStoreWildlifeEditor())
      // TDOO: Add Other Stores to Search
      
      // Search Term
      this.term = term

      // Search Results from All Stores
      const collection = new Array<SearchResult>()
      const routes = router.getRoutes()
      for (const route of routes) {
        if(route.meta.search.some((x) => x.includes(term))) {
          const item = new SearchResult(route)
          collection.push(item)
        }

        const key = route.name?.toString() || ""
        const store = stores.get(key)
        if(store) {
          store.search(term)
          for (const entiy of store.collection ) {
            const item = new SearchResult(route, entiy.id, entiy.name)
            collection.push(item)
          }
        }
      }

      this.results = collection.slice(0, 15)
      this.hasResults = this.results.length > 0
    },
  },
});