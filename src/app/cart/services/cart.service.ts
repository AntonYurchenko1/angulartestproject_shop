import { Injectable } from '@angular/core';
import { Product } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  getPurchasedProducts(): Array<Product> {
    return [
      new Product('Refrigerator1', 'NoFrost', 10000, true) ,
      new Product('Refrigerator2', 'Frost', 15000, true)
    ];
  }
}
