import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todos from 'src/classes/todos';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todos | undefined;
  @Output() takeIdToDo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(): void{
    if (this.todo) this.todo.completed = true;
    // console.log(this)
  }

  deleteTask(): void{
    this.takeIdToDo.emit(this.todo?.id);
  }

}
