import { Data } from "@angular/router";

export default class Todos{
  id: number;
  testo: string;
  priority: number;
  data: string;
  completed = false;
  constructor(id: number, testo: string, priority: number) {
    this.id = id;
    this.testo = testo;
    this.priority = priority,
    this.data = new Date().toLocaleDateString(),
    this.completed = false
  }
}
