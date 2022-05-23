import { defineStore } from "pinia";

export interface IEntity {
  id: number;
  name: string;
}

export class Race implements IEntity {
  public id = 0;
  public name = "";
}

export const useStore = defineStore({
  id: "Race",
  state: () => ({
    collection: new Array<IEntity>(),
  }),
  getters: {
    searchByName: (state) => {
      return (name: string) => state.collection.find((_) => _.name === name);
    },
    getById: (state) => {
      return (id: number) => state.collection.find((_) => _.id === id);
    },
  },
  actions: {
    increment () {
      // this.counter++;
    },
  },
});