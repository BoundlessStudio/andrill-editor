import { nanoid } from "nanoid";
import { Entity } from "./IEntity";
import { storeFactory } from "./StoreFactory";

export class Race extends Entity {
  constructor () { 
    super(nanoid(), "New Race")
    this.description = ""
    this.range = 0
    this.spiner = 0
    this.plate = []
    this.option = 0
  }

  // Text Area Component
  // Lines
  // Text
  public description: string
  
  // Range Slider Component
  // min, max, value
  public range: number

  // Number Spinner Component
  // min, max, value
  public spiner: number

  // Color Picker Component
  // Color Class
  // # => HTML
  // RGBA => Unity
  public color: string | undefined

  // Plate Component
  // Plate Class
  // Array<Color>
  public plate: Array<string>

  // Options (Selection) Component
  // multiple, options
  // Options Class
  // selections
  public option: number

  // Entity Lookup (Selection)
  // Lookup Class
  // Store
  // Id
  public lookup: string | undefined

  // Image Class / Component
  // data:image/png;base64, ######################
  // Tinting ?
  // Plate ?

  // Image Component
  // size: w/h
  public image: string | undefined
}

export const useStore = storeFactory<Race>("Races", Race)