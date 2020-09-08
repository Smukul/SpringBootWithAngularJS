import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new ToDo(1, "Want to learn Angular",new Date(),false),
    new ToDo(2, "Visit South India",new Date(),false),
    new ToDo(3, "Become expoert in Java SpringBoot",new Date(),false),
    new ToDo(4, "Planning to Add ToDo's soon",new Date(),false)
    // {id: 1, desciption: "Want to learn Angular"},
    // {id: 2, desciption: "Visit South India"},
    // {id: 3, desciption: "Become expoert in Java SpringBoot"},
    // {id: 4, desciption: "Planning to Add ToDo's soon"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export class ToDo {
  constructor(
    public id : number,
    public desciption : string,
    public targetDate : Date,
    public isDone : boolean
  ){
  }
}
