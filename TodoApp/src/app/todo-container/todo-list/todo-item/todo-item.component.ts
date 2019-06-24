import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;
  cssClass:string = '';

  handleCheckboxChange(){
    this.todo = {title: this.todo.title, isDone: !this.todo.isDone};
    this.cssClass = (this.cssClass === 'done')? '' : 'done' ;
  }

  constructor() { }

  ngOnInit() {
    if(this.todo.isDone){
      this.cssClass = 'done';
    }
  }

}
