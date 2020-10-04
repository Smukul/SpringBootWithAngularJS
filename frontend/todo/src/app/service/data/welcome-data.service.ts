import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {API_URL} from 'src/app/app.constants'
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloBeanService(){
    //console.log("Execute hello world bean service")
    return this.http.get('${API_URL}/hello-bean')
  }

  executeHelloServicePathVariable(name: string){
    // let basicAuthString  = this.createBasicAuthenticationHeaders()

    // let httpHeader = new HttpHeaders({
    //   Authorization : basicAuthString
    // })

    //return this.http.get(`http://localhost:8080/hello-param/${name}`, {headers : httpHeader})
    return this.http.get(`${API_URL}/hello-param/${name}`)
  }

  createBasicAuthenticationHeaders(){
    let user = 'user'
    let passwrod = 'password'
    let basicAuthString = 'Basic '+ window.btoa(user+':'+passwrod)
    return basicAuthString
  }
}