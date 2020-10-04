import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-todos/list-todos.component';
import {API_URL} from 'src/app/app.constants'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  getAllTodos(userName: string){
    //console.log("Execute hello world bean service")
    return this.http.get<ToDo []>(`${API_URL}/users/${userName}/todos`)
  }

  deleteTodoById(id: Number, userName : String){
    
    return this.http.delete(`${API_URL}/users/${userName}/todos/${id}`)
  }

  retriveTodo(userName:any, id:any){
    return this.http.get<ToDo>(`${API_URL}/users/${userName}/todos/${id}`)
  }
  updateTodo(userName:any, id:any, todo : ToDo){
    return this.http.put(
                `${API_URL}/users/${userName}/todos/${id}`,
                  todo
                  )
  }
  createTodo(userName:any, todo : ToDo){
    return this.http.post(
                `${API_URL}/users/${userName}/todos`,
                  todo
                  )
  }
}
