import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import {ApiService} from "./ApiService";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoService{

  public todoList:Todo[] = [];

  constructor(private apiService: ApiService) {
    //au début, on récupère tous les todos
    this.getTodoList();
  }


  getTodoList(){
    this.apiService.getTodos()
      .subscribe( resp => {
          this.todoList = resp;
        }, () => console.log('Error')
      );
  }

  addTodo(todo:Todo){
    this.apiService.postTodo(todo)
      .subscribe( () => {
        this.getTodoList();
      });
  }

  updateTodo(todo:Todo){
    todo = {...todo, isDone : !todo.isDone};
    this.apiService.putTodo(todo)
      .subscribe( () => {
        this.getTodoList();
      });
  }

  async resetTodos(){
    Promise.all(this.todoList.map( t => this.apiService.deleteTodo(t).toPromise()))
      .then( () => this.getTodoList())
      .catch( () => console.log('Error while deleting'));
    console.log(this.todoList);
  }

}
