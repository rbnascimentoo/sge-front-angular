import { Product } from "./Product";

export class Request {

  id: number;
  description: string;
  deliveryDate: Date;
  items: Array<Product>;
  valueTotal: number;

  constructor(id: number, description: string, deliveryDate: Date, items: Array<Product>, valueTotal: number) {
    this.id = id;
    this.description = description;
    this.deliveryDate = deliveryDate;
    this.items = items;
    this.valueTotal = valueTotal;
  }

}
