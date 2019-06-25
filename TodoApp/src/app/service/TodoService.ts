import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService{

  public todoList:Todo[] =  [
    new Todo('manger de chips'),
    new Todo('certif java'),
    new Todo('boire de l\'eau'),
  ];

  constructor() {}

  addTodo(todo:Todo){
    this.todoList = [...this.todoList, todo];
  }

  updateTodo(todo:Todo){
    let others = this.todoList.filter( t => t.id !== todo.id);
    todo = {...todo, isDone: !todo.isDone};
    this.todoList = [...others, todo].sort((a, b) => a.id - b.id);
  }

  resetTodos(){
    this.todoList = [];
  }

}
