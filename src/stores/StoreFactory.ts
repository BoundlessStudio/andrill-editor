import { defineStore, type StoreGeneric } from "pinia";
import type { Ref } from "vue";
import type { IEntity, INewEntity } from "./IEntity";

export interface IStoreGeneric extends StoreGeneric
{
  // collection: Array<IEntity>
  search (name:string): void
  add (): string
  delete (id:string): void 
  select (id: string): void 
}

export function storeFactory<T extends IEntity> (storeName: string, TCreator: INewEntity) {

  const useStore = defineStore({
    id: storeName,
    state: () => ({
      filter: "",
      items: [] as Array<IEntity>, 
      item: undefined as Ref<T> | undefined
    }),
    getters: {
      collection: (state) => {
        return (state.filter == "") ? state.items : state.items.filter(_ => _.name.toLocaleLowerCase().includes(state.filter))
      },
      getById: (state) => {
        return (id: string) => state.items.find((_) => _.id === id);
      },
    },
    actions: {
      search (name:string): void {
        this.filter = name.toLocaleLowerCase()
      },
      add (): string {
        const item = new TCreator() as T;
        this.items.push(item)
        return item.id
      },
      delete (id:string): void {
        this.items = this.items.filter(_ => _.id != id)
      },
      select (id: string): void {
        this.item = (id) ? this.items.find(_ => _.id == id) as T : undefined
      }
    },
    persist: {
      key: storeName,
      storage: window.localStorage
      //storage: window.sessionStorage,
    },
  })

  return useStore
}