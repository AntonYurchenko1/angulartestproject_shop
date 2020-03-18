import { Injectable } from '@angular/core';
import { Product } from './../../products/models/product.model';
import { CartItem } from './../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  getPurchasedProducts(): Array<Product> {
    return [
      new Product('Refrigerator1', 'NoFrost', 10000, true) ,
      new Product('Refrigerator1', 'NoFrost', 10000, true) ,
      new Product('Refrigerator2', 'Frost', 15000, true)
    ];
  }

  getCartItems(): Array<CartItem> {
    const products = this.getPurchasedProducts();
    const cartItems = new Array<CartItem>();
    products.forEach(element => {
      this.pushProduct(cartItems, element);
    });
    return cartItems;
  }

  // может быть лучше этот массив хранить тут в сервисе
  pushProduct(cartItems: Array<CartItem>, product: Product): Array<CartItem> {
    let exist = false;
    cartItems.forEach(item => {
      if (item.product.name ===  product.name) {
        item.price += product.price;
        item.quant += 1;
        exist = true;
      }
    });
    if (!exist) {
      cartItems.push(new CartItem(product, product.price, 1));
    }
    return cartItems;
  }
}
