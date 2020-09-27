import { Component, OnInit } from '@angular/core';
//Import the class from othre module
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome to My Application"
  name = ""

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService) {
   }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];
    //console.log(this.message)
    let tst = new TestChild();
    tst.display;
  }

  getWelcomeMessage(): void{
    //console.log("From welcome message")
    console.log(this.service.executeHelloBeanService())
    this.service.executeHelloBeanService().subscribe(
      response => this.handleResponseMessage(response),
      error => this.handleErrorMessage(error)
    )
    console.log("Last line of getWelcomeMessage")
  }

  getWelcomeMessageWithParam(): void{
    //console.log("From welcome message")
    console.log(this.service.executeHelloServicePathVariable(this.name))
    this.service.executeHelloServicePathVariable(this.name).subscribe(
      response => this.handleResponseMessage(response),
      error => this.handleErrorMessage(error)
    )
  }

  handleResponseMessage(response: any){
    console.log(response)
    console.log(response.name)
    this.message = response.name
    console.log(response)

  }
  
  handleErrorMessage(error: any){
    this.message = error.error.message
    console.log("error.error.message") //It will prinf the error message
        
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