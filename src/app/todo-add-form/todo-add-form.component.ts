import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import FormError from 'src/classes/formError';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent implements OnInit {

  // dichiariamo un evento che verrà catturato dall' elemento padre di tipo any visto che l' elemento non avrà ancora il tipo Todos
  @Output() newTask: EventEmitter<any> = new EventEmitter<any>()

  isError: FormError;

  constructor() {
    this.isError = new FormError;
   }

  ngOnInit(): void {
  }

  verifyForm(testo: string, priority: number): void{
    if (testo === '') {
      this.isError.isError = true;
      this.isError.testoError = true;
    }
    if (priority < 1 || priority > 5) {
      this.isError.isError = true;
      this.isError.priorityError = true;
    }
  }

  addTask(desc: HTMLInputElement, prio: HTMLInputElement) {
    this.isError.isError = false;
    this.isError.testoError = false;
    this.isError.priorityError = false;
    const testo = desc.value,
      priority = +prio.value;
    desc.value = '';
    prio.value = '';
    this.verifyForm(testo, priority);
    if (!this.isError.isError) {
      const newTodo = {
        testo: testo,
        priority: +priority
      };
    // creato il todo parziale emettiamo l' evento passando in input il todo
    this.newTask.emit(newTodo);
    }

  }

}
