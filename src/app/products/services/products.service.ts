import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product('Refrigerator1', 'NoFrost', 10000, true),
      new Product('Refrigerator2', 'Frost', 15000, true),
      new Product('Refrigerator3', 'NoFrost', 15000, false)
    ];
  }

}
