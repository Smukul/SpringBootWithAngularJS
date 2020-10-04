import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicService implements HttpInterceptor{

  constructor(private basicAuthService : BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let user = 'user'
    // let passwrod = 'password'
    // let basicAuthString = 'Basic '+ window.btoa(user + ':' + passwrod)
    let basicAuthString = this.basicAuthService.getAuthenticatedToekn();
    let userName = this.basicAuthService.getAuthenticatedUser()

    if(basicAuthString && userName) {
      req = req.clone({
          setHeaders : {
            Authorization : basicAuthString
          }
        }
      )
    }
    return next.handle(req);
  }
}
