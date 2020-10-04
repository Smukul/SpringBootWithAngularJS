import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { API_URL,AUTHENTICATED_USER,TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthService {

  constructor(
    private http : HttpClient
  ) { }

  executeBasucAuthService(user:string,passwrod:string){
    let basicAuthString = 'Basic '+ window.btoa(user+':'+passwrod)

    let httpHeader = new HttpHeaders({
      Authorization : basicAuthString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basic-auth`, 
    {headers : httpHeader}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,user);
          sessionStorage.setItem(TOKEN,basicAuthString);
          return data;
        }
      )
    )
  }

  isUserLoggedIn() : boolean{
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToekn(){
    return sessionStorage.getItem(TOKEN);
  }

  executeJWTAuthService(user:string,passwrod:string){
    
    return this.http.post<any>(`${API_URL}/authenticate`, 
    {
      user, passwrod
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,user);
          sessionStorage.setItem(TOKEN,'Bearer ${data.token}');
          return data;
        }
      )
    )
  }
}

export class AuthenticationBean{
  constructor(private message:string){}
}
