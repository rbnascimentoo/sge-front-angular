import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>( + '/participant', participant);
  }

}
