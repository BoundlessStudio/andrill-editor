import { defineStore } from "pinia";
//import { ref } from "vue";
import type { Ref } from "vue";
import type { IEntity, INewEntity } from "./IEntity";
import { useStorage } from '@vueuse/core'

export function storeFactory<T extends IEntity> (storeName: string, TCreator: INewEntity) {
  // item: undefined as T | undefined
  //items: ref<T[]>([]) as Ref<T[]>,
      
  const useStore = defineStore({
    id: storeName,
    state: () => ({
      filter: "",
      items: useStorage<IEntity[]>(storeName, []),
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
      search (name:string) {
        this.filter = name.toLocaleLowerCase()
      },
      add (): string {
        const item = new TCreator() as T;
        this.items.push(item)
        return item.id
      },
      delete (id:string) {
        this.items = this.items.filter(_ => _.id != id)
      },
      select (id: string) {
        this.item = (id) ? this.items.find(_ => _.id == id) as T : undefined
      }
    },
  })
  return useStore

}