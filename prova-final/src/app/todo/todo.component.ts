import { Component, OnInit } from '@angular/core';
import { InterTodo } from '../todo';//interface importada do arquivo ts
import { TodoService } from './../todo.service'; //importando nosso serviço

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos: InterTodo[]=[];

  constructor(private TodoService: TodoService){}

  ngOnInit(): void {
      this.TodoService.ObserTodo()
        .subscribe(inter => this.todos = inter);
  }
}
