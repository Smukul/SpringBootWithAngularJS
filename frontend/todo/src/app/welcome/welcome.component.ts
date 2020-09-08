import { Component, OnInit } from '@angular/core';
//Import the class from othre module
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome to My Application"
  name = ""

  constructor(private router: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];
    console.log(this.message)
    let tst = new TestChild();
    tst.display;
  }

}

export abstract class Test {
  test : string = "This is Test class variable"
  hello() : string{
    return this.test + " from hello method";
  }

  abstract display() : void;
}

export class TestChild extends Test{
  display() {
    console.log("This is abstract method implementation in child")
    console.log(this.hello)
  }

}