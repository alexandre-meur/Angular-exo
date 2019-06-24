import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../../model/Todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {title: 'ToDo', isDone: false};

  @Output()
  eventNewTodo = new EventEmitter<Todo>();
  @Output()
  eventEmptyTodos = new EventEmitter();

  submitTodo():void{
    this.eventNewTodo.emit( {title:this.todo.title, isDone:this.todo.isDone});
  }

  emptyTodos():void{
    this.eventEmptyTodos.emit();
  }

  updateTitle(eventTitle){
    this.todo = {...this.todo, title: eventTitle.target.value};
  }

  updateIsDone(){
    this.todo = {...this.todo, isDone: !this.todo.isDone};
  }

  constructor() { }

  ngOnInit() {
  }

}
