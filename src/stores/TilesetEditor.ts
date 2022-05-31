import { Entity } from "./IEntity";
import { nanoid } from 'nanoid'
import { storeFactory } from "./StoreFactory";

export class Tileset extends Entity {
  constructor () { 
    super(nanoid(), "New Tileset")
  }
}

export const useStore = storeFactory<Tileset>("Tilesets", Tileset)