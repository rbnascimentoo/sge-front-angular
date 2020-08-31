import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { Request } from 'src/app/models/Request';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {

  request: Request;
  idRequest: string = null;
  itemsList: Array<Product>;

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit() {
    this.createNewRequest();

    this.idRequest = localStorage.getItem('idproductedit');

    if (this.idRequest !== undefined && this.idRequest != null) {
      this.requestService.findById(this.idRequest).subscribe(response => {
            this.request = response.data;
        }, err => {
            console.log('erro ao buscar pedido', err);

        });
    }

  }

  createNewRequest() {
    this.request = new Request(null, null, null, null, null);
  }

  save() {
    if (this.request.id != null && this.request.id > 0) {
      this.requestService.edit(this.request).subscribe(data => {
        this.createNewRequest();
        this.router.navigate(['request']);
      }, err => {
        console.log('erro ao atualizar pedido!');
      });
    } else {
      this.requestService.save(this.request).subscribe(data => {
        this.createNewRequest();
        this.router.navigate(['request']);
      }, err => {
        console.log('erro ao salvar pedido!');
      });
    }
  }

  cancel() {
    this.createNewRequest();
    this.router.navigate(['request']);
  }

  deleteItem() {

  }
}
