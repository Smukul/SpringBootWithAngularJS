import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(userName : string, password : string){
    // console.log('Before : '+this.isUserLoggedIn())
    if(userName==="TestUser" && password==="test"){
      sessionStorage.setItem('authenticateUser',userName);
      // console.log('After : '+this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean{
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
