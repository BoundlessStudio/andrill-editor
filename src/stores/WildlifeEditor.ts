import { nanoid } from "nanoid";
import { Entity } from "./IEntity";
import { storeFactory } from "./StoreFactory";

export class Wildlife extends Entity {
  constructor () { 
    super(nanoid(), "New Race")
    this.description = ""
    this.lifespan = 100
  }

  // Text Area
  public description: string

  // Text Area
  public lifespan: number
  
  // Image
  public image: string | undefined

  // Selection
  public lookup: string | undefined
}

export const useStore = storeFactory<Wildlife>("Wildlife", Wildlife)