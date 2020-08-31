import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/Product';
import { Response } from './../../models/responses/Response';
import { Constant } from './../../models/constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Response<Product>> {
    return this.httpClient.get<Response<Product>>(Constant.URL_BASE_LOCAL + '/product');
  }

  save(product: Product): Observable<Response<Product>> {
    return this.httpClient.post<Response<Product>>(Constant.URL_BASE_LOCAL + '/product', product);
  }

  delete(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(Constant.URL_BASE_LOCAL + '/product/' + id);
  }

  findById(id: string): Observable<Response<Product>> {
    return this.httpClient.get<Response<Product>>(Constant.URL_BASE_LOCAL + '/product/' + id);
  }

  edit(product: Product): Observable<Response<Product>> {
    return this.httpClient.put<Response<Product>>(Constant.URL_BASE_LOCAL + '/product/' + product.id, product);
  }
}
