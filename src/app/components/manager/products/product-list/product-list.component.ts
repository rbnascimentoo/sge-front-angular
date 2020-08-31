import { SharedService } from './../../../../services/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../models/Product';
import { ProductService } from './../../../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = new Array<Product>();
  product: Product;

  constructor(private router: Router, private productService: ProductService, private sharedService: SharedService) { }

  ngOnInit() {
    this.search();
  }

  search() {

    localStorage.setItem('idproductedit', null);

    this.productList = new Array<Product>();
    this.productService.findAll().subscribe( response => {

      Array.of(response.data).forEach(element => {
        if (element !== undefined) {
          this.productList.push(element);

        }
      });

    }, err => {
      console.log('error', err);
    });

  }

  showDataTable(): boolean {
    return this.productList != null && this.productList !== undefined && this.productList[0] != null;
  }

  new() {
    localStorage.setItem('idproductedit', null);
    this.router.navigate(['product/new']);

  }

  edit(id: string) {
    localStorage.setItem('idproductedit', id);
    this.router.navigate(['product/edit']);
  }

  delete(id: string) {
    this.productService.delete(id).subscribe(data => {
      this.search();
    }, err => {
      console.log('error ao deletar produto.');
    });
  }

}
