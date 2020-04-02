import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';
import {Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return new Observable<Array<Product>>((observer: Subscriber<Array<Product>>) => {
      observer.next([
        new Product('Refrigerator1', 'NoFrost', 10000, true),
        new Product('Refrigerator2', 'Frost', 15000, true),
        new Product('Refrigerator3', 'NoFrost', 15000, false)
      ]);
    });
  }

  getProducts2(): Promise<Array<Product>> {
    return new Promise<Array<Product>>((resolve, reject) => {
      setTimeout(() => {
        resolve ([
          new Product('Refrigerator1', 'NoFrost', 10000, true),
          new Product('Refrigerator2', 'Frost', 15000, true),
          new Product('Refrigerator3', 'NoFrost', 15000, false)
        ]);
        // reject('Error');
      }, 15000);
    }).catch(error => error) as Promise<Array<Product>>;
  }

}
