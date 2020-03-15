import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { CommunicatorService } from './../../../shared/services/communicator.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  productsInBasket: Array<Product>;
  constructor(private productService: ProductsService, private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log('get products');
    console.log(this.products[0].name);
    this.productsInBasket = new Array<Product>();
  }

  onAddBasket(product: Product): void {
    console.log('add basket event ProductListComponent ', product);
    this.productsInBasket.push(product);
    this.communicatorService.publishProduct(product);

    console.log('products count in basket ', this.productsInBasket.length);
  }

}
