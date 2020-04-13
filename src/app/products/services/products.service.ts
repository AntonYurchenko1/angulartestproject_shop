import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';
import { Observable, Subscriber, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const productList = [
  new Product(1, 'Refrigerator1', 'NoFrost', 10000, true),
  new Product(2, 'Refrigerator2', 'Frost', 15000, true),
  new Product(3, 'Refrigerator3', 'NoFrost', 15000, false)
];

const productListPromise = Promise.resolve(productList);

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return new Observable<Array<Product>>((observer: Subscriber<Array<Product>>) => {
      observer.next(productList);
    });
  }

  getProducts2(): Promise<Array<Product>> {
    /*return new Promise<Array<Product>>((resolve, reject) => {
      setTimeout(() => {
        resolve ([
          new Product(1, 'Refrigerator1', 'NoFrost', 10000, true),
          new Product(2, 'Refrigerator2', 'Frost', 15000, true),
          new Product(3, 'Refrigerator3', 'NoFrost', 15000, false)
        ]);
        // reject('Error');
      }, 15000);
    }).catch(error => error) as Promise<Array<Product>>;
    */
    return productListPromise;
  }

  getProduct2(id: number | string): Promise<Product> {
    return this.getProducts2()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  getProduct(id: number | string): Observable<Product> {
    return this.getProducts()
      .pipe(
        map((products: Array<Product>) => products.find(p => p.id === +id)),
        catchError(err => throwError('Error in getProduct2 method'))
      );
  }

  createProduct(product: Product): void {
    productList.push(product);
  }

  updateProduct(product: Product): void {
    const i = productList.findIndex(t => t.id === product.id);

    if (i > -1) {
      productList.splice(i, 1, product);
    }
  }

  deleteProduct(product: Product): void {
    const i = productList.findIndex(t => t.id === product.id);

    if (i > -1) {
      productList.splice(i, 1);
    }
  }

}
