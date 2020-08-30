import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './../../models/Client';
import { Response } from './../../models/responses/Response';
import { Constant } from './../../models/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<Client>> {
    return this.httpClient.get<Response<Client>>(Constant.URL_BASE_LOCAL + '/client');
  }

  save(client: Client): Observable<Response<Client>> {
    return this.httpClient.post<Response<Client>>(Constant.URL_BASE_LOCAL + '/client', client);
  }

  delete(id: string): Observable<Client> {
    return this.httpClient.delete<Client>(Constant.URL_BASE_LOCAL + '/client/' + id);
  }

  findById(id: string): Observable<Response<Client>> {
    return this.httpClient.get<Response<Client>>(Constant.URL_BASE_LOCAL + '/client/' + id);
  }

  edit(client: Client): Observable<Response<Client>> {
    return this.httpClient.put<Response<Client>>(Constant.URL_BASE_LOCAL + '/client/' + client.id, client);
  }

}
