import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";
import {TodoService} from "../service/TodoService";
import {log} from "util";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(public todoService:TodoService) { }

  changeIsDone(){
    this.todoService.updateTodo(this.todo);
  }

  ngOnInit() {}

}
