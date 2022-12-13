import { Injectable } from '@angular/core';
import { InterTodo } from './todo';//interface importada do arquivo ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoURL = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  
  ObserTodo(): Observable<InterTodo[]>{
    return this.http.get<InterTodo[]>(this.todoURL)
  }
}
