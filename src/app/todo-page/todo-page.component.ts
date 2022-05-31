import { Component, OnInit } from '@angular/core';
import Todos from 'src/classes/todos';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos: Todos[] = [];

  constructor() {

    this.todos = [
      new Todos(1, 'Task 1', 2),
      new Todos(2, 'Task 2', 1),
      new Todos(3, 'Task 3', 5),
      new Todos(4, 'Task 4', 5),
    ];

   }

  ngOnInit(): void {
  }

  sortTodos(): Todos[]{
    return this.todos.sort((a: Todos, b: Todos) => a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0);
  }

  addTodo(todo: any) {
    const id = this.todos.length + 1;
    const newTodo = new Todos(id, todo.testo, todo.priority);
    this.todos.push(newTodo);
  }

  deleteTodo(id: number): void {
    let index = this.takeIdTaskDelete(id);
    this.todos.splice(index, 1);
  }

  takeIdTaskDelete(id: number): number{
    let pos: number = 0;
    this.todos.forEach((element, index) => {
      if (element.id === id) {
        pos = index;

      }
    })
    return pos
  }
}
