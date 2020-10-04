import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { BasicAuthService } from '../service/basic-auth.service';
import { TodoDataService } from '../service/todo/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  user : any
  id: any
  todo : ToDo

  constructor(
    private todoService : TodoDataService,
    private router : ActivatedRoute,
    private route : Router,
    private basicAuthService : BasicAuthService
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.todo = new ToDo(this.id,'',new Date(),false)
    if(this.todo.id != -1 ){
    this.todoService.retriveTodo(this.user,this.id).subscribe(
      data => this.todo = data
    )
    }
  }

  saveTodo(){
    let user = this.basicAuthService.getAuthenticatedUser()
    if(this.todo.id == -1){
      this.todoService.createTodo(user, this.todo).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['todos'])
        }
      )
    } else {
    this.todoService.updateTodo(user,this.id,this.todo).subscribe(
      data => {
        console.log(data)
        this.route.navigate(['todos'])
      }
    )
    }
    console.log("Todo Saved")
  }
}
