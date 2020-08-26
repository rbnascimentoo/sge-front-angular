import { UserLogin } from './../../models/UserLogin';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url = 'https://security-core-app.herokuapp.com';
  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    return this.httpClient.post<any>(this.url + '/user/login', userLogin);
  }

}
