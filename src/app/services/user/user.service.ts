import { Response } from './../../models/responses/Response';
import { User } from './../../models/User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url = 'https://security-core-app.herokuapp.com';
  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(this.url + '/user');
  }

  // saveUser(participant: Participant): Observable<Participant> {
  //   return this.http.post<Participant>(this.url + '/participant', participant);
  // }

  // deleteUser(_id: string): Observable<Participant> {
  //   return this.http.delete<Participant>(this.url + '/participant/' + _id);
  // }

  // findUser(id: string): Observable<Participant> {
  //   return this.http.get<Participant>(this.url + '/participant/' + id);
  // }

  // editUser(participant: Participant): Observable<Participant> {
  //   return this.http.put<Participant>(this.url + '/participant/' + participant._id, participant);
  // }

}
