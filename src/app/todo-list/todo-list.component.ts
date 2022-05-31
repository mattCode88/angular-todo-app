import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todos from 'src/classes/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todos[] = [];
  @Output() deleteToDo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteAllTask(): void{
    this.todos = [];
  }

  deleteTask(id: number): void{
    // console.log(id)
    this.deleteToDo.emit(id);
  }

}
