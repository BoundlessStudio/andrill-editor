import { nanoid } from "nanoid";
import { Entity } from "./IEntity";
import { storeFactory } from "./StoreFactory";

export class Race extends Entity {
  constructor () { 
    super(nanoid(), "New Race")
  }
}

export const useStore = storeFactory<Race>("Race", Race)