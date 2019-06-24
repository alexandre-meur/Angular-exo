import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  @Output()
  eventChangeIsDone = new EventEmitter<Todo>();

  changeIsDone(){
    this.eventChangeIsDone.emit(this.todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
