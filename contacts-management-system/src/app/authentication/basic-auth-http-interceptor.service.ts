import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req != undefined) {

      req = req.clone({
        setHeaders: {     
               
          Authorization: 'Basic '+btoa(environment.userName + ':' + environment.password)
        }
      })
    }
    return next.handle(req);

  }
}
