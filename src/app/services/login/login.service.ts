import { UserLogin } from './../../models/UserLogin';
import { Constant } from './../../models/constants/Constants';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    return this.httpClient.post<any>(Constant.URL_BASE_LOCAL + '/user/login', userLogin);
  }

}
