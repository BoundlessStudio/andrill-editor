import router from "@/router/"
import { defineStore } from "pinia"
import type { RouteRecordNormalized } from "vue-router"
import type { IStoreGeneric } from "./StoreFactory";
import type { IEntity } from "./IEntity";
import { useStore as useStoreRaceEditor} from "@/stores/RaceEditor";
import { useStore as useStoreTilesetEditor } from "@/stores/TilesetEditor";


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

function addToStores (stores: Map<string, Array<IEntity>>, store: IStoreGeneric): void {
  console.log("store", store.$id)
  stores.set(store.$id, store.items)
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
      this.results = [];
    },
    search (term: string) {
      const stores = new Map<string, Array<IEntity>>()
      addToStores(stores, useStoreRaceEditor())
      addToStores(stores, useStoreTilesetEditor())
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
        const items = stores.get(key)
        if(items) {
          const entities = items.filter(_ => _.name.toLocaleLowerCase().includes(term)) 
          for (const entiy of entities ) {
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