import { Injectable } from '@angular/core';
import {Todo} from "../model/Todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_BASE_URL = 'http://localhost:3000';

  getTodos() : Observable<any>{
    return this.http.get(`${this.API_BASE_URL}/todos`);
  }

  postTodo(todo:Todo) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(`${this.API_BASE_URL}/todos`, todo, {headers});
  }

  putTodo(todo:Todo){
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(`${this.API_BASE_URL}/todos/${todo.id}`, todo, {headers});
  }

  deleteTodo(todo:Todo){
    return this.http.delete(`${this.API_BASE_URL}/todos/${todo.id}`);
  }
}
