import { Injectable } from '@angular/core';
import { InterTodo } from './todo';//interface importada do arquivo ts


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoURL = 'https://jsonplaceholder.typicode.com/todos'

  constructor() { }
}
