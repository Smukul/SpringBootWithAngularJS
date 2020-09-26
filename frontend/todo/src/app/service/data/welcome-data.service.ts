import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloBeanService(){
    //console.log("Execute hello world bean service")
    return this.http.get("http://localhost:8080/hello-bean")
  }

  executeHelloServicePathVariable(name: string){
    //console.log("Execute hello world bean service")
    return this.http.get(`http://localhost:8080/hello-param/${name}`)
  }
}