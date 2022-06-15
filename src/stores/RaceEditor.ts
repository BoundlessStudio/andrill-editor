import { nanoid } from "nanoid";
import { Entity } from "./IEntity";
import { storeFactory } from "./StoreFactory";
import type { ColorInputWithoutInstance } from "tinycolor2"
 
export class Race extends Entity {
  constructor () { 
    super(nanoid(), "New Race")
    this.description = ""
    this.range = 0
    this.spiner = 0
    this.color = "transparent" as ColorInputWithoutInstance;
    this.gradient  = "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)";
    this.palette = []
    this.option = ""
    this.options = []
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
  public color: ColorInputWithoutInstance

  public gradient: string

  // Plate Component
  // Plate Class
  // Array<Color>
  public palette: Array<ColorInputWithoutInstance>

  // Options (Selection) Component
  public option: string

  // Options (Tags) Component
  // multiple
  public options: Array<string>

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