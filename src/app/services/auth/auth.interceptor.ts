import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './../shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInteceptor implements HttpInterceptor {

  shared: SharedService;

  constructor(private router: Router) {
    this.shared = SharedService.getInstance();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.shared.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          'Authorization' : 'Bearer' + localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        }
      });
      return next.handle(req);
    } else {

      req.clone({
          url: '/login'
      });

      return next.handle(req);
    }
  }

}
