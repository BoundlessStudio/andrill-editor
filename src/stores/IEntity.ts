

export interface INewEntity {
  new(): Entity
}

export interface IEntity {
  id: string;
  name: string;
}

export class Entity implements IEntity {
  id: string;
  name: string;
  constructor (id: string, name: string) { 
    this.id = id
    this.name = name
  }
}