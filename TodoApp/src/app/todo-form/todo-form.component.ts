import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";
import {TodoService} from "../service/TodoService";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  nomTodo: string;

  constructor(public todoService: TodoService) {}

  submitTodo() {
    this.todoService.addTodo(new Todo(this.nomTodo));
  }

  emptyTodos() {
    this.todoService.resetTodos();
  }

  updateTitle(eventTitle) {
    this.nomTodo = eventTitle.target.value;
  }

  ngOnInit() {
  }
}
