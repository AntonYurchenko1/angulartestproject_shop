import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { CommunicatorService } from './../../../shared/services/communicator.service';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<Product>>;
  products2: Promise<Array<Product>>;
  productsInBasket: Array<Product> = new Array<Product>();
  constructor(private router: Router, private productService: ProductsService, private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.products2 = this.productService.getProducts2();
    console.log('get products');
    // this.productsInBasket = new Array<Product>(); // наверное, это не самый лучший варант тут создавать корзину
  }

  onAddBasket(product: Product): void {
    console.log('add basket event ProductListComponent ', product);
    this.productsInBasket.push(product);
    this.communicatorService.publishProduct(product);

    console.log('products count in basket ', this.productsInBasket.length);
  }

  onEditProduct(p: Product): void {
    const link = ['/edit', p.id];
    console.log('router navigat /edit', p.id);
    this.router.navigate(link);
  }

}
