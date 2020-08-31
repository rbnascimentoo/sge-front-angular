import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../../models/Request';
import { Response } from './../../models/responses/Response';
import { Constant } from './../../models/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<Request>> {
    return this.httpClient.get<Response<Request>>(Constant.URL_BASE_LOCAL + '/request');
  }

  save(request: Request): Observable<Response<Request>> {
    return this.httpClient.post<Response<Request>>(Constant.URL_BASE_LOCAL + '/request', request);
  }

  delete(id: string): Observable<Request> {
    return this.httpClient.delete<Request>(Constant.URL_BASE_LOCAL + '/request/' + id);
  }

  findById(id: string): Observable<Response<Request>> {
    return this.httpClient.get<Response<Request>>(Constant.URL_BASE_LOCAL + '/request/' + id);
  }

  edit(request: Request): Observable<Response<Request>> {
    return this.httpClient.put<Response<Request>>(Constant.URL_BASE_LOCAL + '/request/' + request.id, request);
  }
}
