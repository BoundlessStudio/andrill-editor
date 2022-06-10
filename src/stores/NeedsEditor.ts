import { nanoid } from "nanoid";
import { Entity } from "./IEntity";
import { storeFactory } from "./StoreFactory";

export class Needs extends Entity {
  constructor () { 
    super(nanoid(), "New Needs")
    this.description = ""
  }

  // Text Area
  public description: string
  
  // Image
  public image: string | undefined

  // Selection
  public lookup: string | undefined
}

export const useStore = storeFactory<Needs>("Needs", Needs)