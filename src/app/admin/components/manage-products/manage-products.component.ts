import { Component, OnInit } from '@angular/core';
import { Product } from './../../../products/models/product.model';
import { ProductsService } from './../../../products/services/products.service';
import { CommunicatorService } from './../../../shared/services/communicator.service';
import { ManageProductComponent } from './../../components';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Observable<Array<Product>>;
  products2: Promise<Array<Product>>;
  productsInBasket: Array<Product> = new Array<Product>();
  constructor(
    private router: Router,
    private productService: ProductsService,
    private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.products2 = this.productService.getProducts2();
    console.log('get products');
  }

  onEditProduct(p: Product): void {
    const link = ['/admin/products/edit', p.id];
    console.log('router navigat /admin/products/edit', p.id);
    this.router.navigate(link);
  }

}

