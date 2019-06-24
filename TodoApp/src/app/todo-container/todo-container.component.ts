import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/Todo";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList:Todo[] = [];

  addTodo(todo: Todo){
    this.todoList = [...this.todoList, todo];
  }

  resetTodos(){
    this.todoList = [];
  }


  constructor() { }

  ngOnInit() {
  }

}
