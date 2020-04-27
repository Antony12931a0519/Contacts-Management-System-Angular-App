import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler,HttpEvent,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  
  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req != undefined) {

      req = req.clone({
        setHeaders: {     
               
          Authorization: 'Basic '+btoa(environment.userName + ':' + environment.password)
        }
      })
    }
    return next.handle(req).pipe(
      catchError( (error: HttpErrorResponse) => { 
         let errMsg = '';
         // Client Side Error
         if (error.error instanceof ErrorEvent) {        
           errMsg = `Error: ${error.error.message}`;
         } 
         else {  // Server Side Error
           errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
         }
             this.toastr.error(errMsg);
             return throwError(errMsg);
       })
    )

  }
}
