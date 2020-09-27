import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TodoDataService} from '../service/todo/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = []
  deleteMessage : string
    // new ToDo(1, "Want to learn Angular",new Date(),false),
    // new ToDo(2, "Visit South India",new Date(),false),
    // new ToDo(3, "Become expoert in Java SpringBoot",new Date(),false),
    // new ToDo(4, "Planning to Add ToDo's soon",new Date(),false)
    // ]
  constructor(
    private todoService : TodoDataService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.refreshToDos()
  }

  refreshToDos(){
    this.todoService.getAllTodos('TestUser').subscribe(
      response => {
        //console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id: any){
    console.log("Delete Clicked for id : "+id)
    this.todoService.deleteTodoById(id,'TestUser').subscribe(
      response => {
        console.log(response)
        this.deleteMessage = `ToDo deleted successfully : ${id}`
        this.refreshToDos()
      }
    )
  }

  updateToDo(id:number){
    console.log("Update click"+id)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}

export class ToDo {
  constructor(
    public id : number,
    public description : string,
    public targetDate : Date,
    public done : boolean
  ){
  }
}
