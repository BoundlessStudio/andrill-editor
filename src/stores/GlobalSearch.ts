import { defineStore } from "pinia";
import router from "@/router/";

export class SearchResult {
  public path: string;
  public name: string;
  public icon: string;

  constructor (name: string, icon: string, path: string) {
    this.name = name;
    this.icon = icon;
    this.path = path;
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
      let collection = new Array<SearchResult>();

      // Search Results for Router to Edtiors
      const routes = router.getRoutes();
      const pages = routes
        .filter((z) => z.meta.search.some((x) => x.includes(term)))
        .map(
          (_) => new SearchResult(_.name?.toString() || "", _.meta.icon, _.path)
        );
      collection = collection.concat(pages);

      // TODO:
      // Get Search Results From Stores
      // Match the Results to the Routes

      this.results = collection.slice(0, 10);
      this.hasResults = collection.length > 0;
    },
  },
});