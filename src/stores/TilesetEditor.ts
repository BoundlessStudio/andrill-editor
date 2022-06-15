import { Entity } from "./IEntity";
import { nanoid } from 'nanoid'
import { storeFactory } from "./StoreFactory";

export class Tileset extends Entity {
  constructor () { 
    super(nanoid(), "New Tileset")

    this.description = ""
  }

  public description: string
}

export const useStore = storeFactory<Tileset>("Tilesets", Tileset)