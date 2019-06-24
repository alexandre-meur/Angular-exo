import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList:Todo[];

  @Output()
  eventChangeIsDoneList = new EventEmitter<Todo>();

  changeIsDone(todo:Todo){
    this.eventChangeIsDoneList.emit(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
