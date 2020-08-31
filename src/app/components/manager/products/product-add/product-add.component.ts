import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product;
  idProduct: string = null;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.createNewProduct();

    this.idProduct = localStorage.getItem('idproductedit');

    if (this.idProduct !== undefined && this.idProduct != null) {
      this.productService.findById(this.idProduct).subscribe(response => {
            this.product = response.data;
        }, err => {
            console.log('erro ao buscar produto', err);

        });
    }

  }

  createNewProduct() {
    this.product = new Product(null, null, null);
  }

  save() {
    if (this.product.id != null && this.product.id > 0) {
      this.productService.edit(this.product).subscribe(data => {
        this.createNewProduct();
        this.router.navigate(['product']);
      }, err => {
        console.log('erro ao atualizar produto!');
      });
    } else {
      this.productService.save(this.product).subscribe(data => {
        this.createNewProduct();
        this.router.navigate(['product']);
      }, err => {
        console.log('erro ao salvar produto!');
      });
    }
  }

  cancel() {
    this.createNewProduct();
    this.router.navigate(['product']);
  }

}
