import { defineStore } from "pinia";
import type { RouteRecordNormalized } from "vue-router";
import router from "@/router/";

export class SearchResult {
  public path: string;
  public editor: string;
  public icons: Array<string>;
  public item: string | undefined

  constructor (route: RouteRecordNormalized, id = "", name = undefined) {
    this.editor = route.name?.toString() || ""
    this.icons = route.meta.icons
    this.path = route.path.replace(":id?", id)
    this.item = name
  }
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
      this.hasResults = false;
      this.results = [];
    },
    search (term: string) {
      // Search Term
      this.term = term;

      // Search Results from All Stores
      const collection = new Array<SearchResult>();
      const routes = router.getRoutes();
      for (const route of routes) {
        if(route.meta.search.some((x) => x.includes(term))) {
          const item = new SearchResult(route)
          collection.push(item)
        }

        // if(route.name)

        // TDOO: Add Store Serch
      }

      this.results = collection.slice(0, 10);
      this.hasResults = this.results.length > 0;
    },
  },
});