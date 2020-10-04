import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthService } from '../service/basic-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "TestUser"
  password = ""
  errorMessage = "Invalid Credentials"
  inValidLogin = false

  //Dependency Injection - injecting router
  constructor(
    private router : Router, 
    private hardcodedService : HardcodedAuthService,
    private basicAuth : BasicAuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.userName)
    // if(this.userName==="TestUser" && this.password==="test"){
      if(this.hardcodedService.authenticate(this.userName,this.password)){
      this.inValidLogin = false;
      //Redirect Welcome page
      this.router.navigate(['welcome', this.userName]);
    } else{
      this.inValidLogin = true;
    }
    // console.log(this.password)
  }

  handleBasicAuthLogin() {
    console.log(this.userName)
    this.basicAuth.executeBasucAuthService(this.userName,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.userName]);
          this.inValidLogin = false
        },
        error => {
          console.log(error)
          this.inValidLogin = true
        }
      )
    // console.log(this.password)
  }
  handleJWTcAuthLogin() {
    console.log(this.userName)
    this.basicAuth.executeJWTAuthService(this.userName,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.userName]);
          this.inValidLogin = false
        },
        error => {
          console.log(error)
          this.inValidLogin = true
        }
      )
  }
}
