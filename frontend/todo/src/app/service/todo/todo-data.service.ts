import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  getAllTodos(userName: string){
    //console.log("Execute hello world bean service")
    return this.http.get<ToDo []>(`http://localhost:8080/users/${userName}/todos`)
  }

  deleteTodoById(id: Number, userName : String){
    
    return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`)
  }
}
