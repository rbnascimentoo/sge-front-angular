import { Observable } from 'rxjs';
import { SharedService } from './../shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInteceptor implements HttpInterceptor {

  shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest: any;

    if (this.shared.isLoggedIn()) {
      authRequest = req.clone({
        setHeaders: {
          'Authorization' : localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }

}
