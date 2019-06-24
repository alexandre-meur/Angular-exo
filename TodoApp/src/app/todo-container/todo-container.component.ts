import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/Todo";
import {_without} from 'lodash';

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

  updateTodo(todo:Todo){
    let others = this.todoList.filter( t => t.title !== todo.title);

    todo = {...todo, isDone: !todo.isDone};

    this.todoList = [...others, todo];
  }

  resetTodos(){
    this.todoList = [];
  }


  constructor() { }

  ngOnInit() {
  }

}
