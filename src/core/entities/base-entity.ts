import { BaseEntity } from 'typeorm';

export class DIMMediatorBaseEntity extends BaseEntity {
  static APIEndPoint: string;

  toResponseObject() {
    console.log(this);
    return this;
  }
}
