import { Response } from './../../models/responses/Response';
import { User } from './../../models/User';
import { Constant } from './../../models/constants/Constants';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(Constant.URL_BASE_LOCAL + '/user');
  }

  save(user: User): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(Constant.URL_BASE_LOCAL + '/user', user);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(Constant.URL_BASE_LOCAL + '/user/' + id);
  }

  findById(id: string): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(Constant.URL_BASE_LOCAL + '/user/' + id);
  }

  edit(user: User): Observable<Response<User>> {
    return this.httpClient.put<Response<User>>(Constant.URL_BASE_LOCAL + '/user/' + user.id, user);
  }

}
