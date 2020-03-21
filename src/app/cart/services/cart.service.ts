import { Injectable } from '@angular/core';
import { Product } from './../../products/models/product.model';
import { CartItem } from './../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<CartItem>;

  constructor() { }

  deleteCartItem(cartitem: CartItem): void {
    for ( let i = 0; i < this.cartItems.length; i++) {
      if ( this.cartItems[i].product.name === cartitem.product.name) {
        this.cartItems.splice(i, 1);
        i--;
      }
    }
  }

  getPurchasedProducts(): Array<Product> {
    return [
      new Product('Refrigerator1', 'NoFrost', 10000, true) ,
      new Product('Refrigerator1', 'NoFrost', 10000, true) ,
      new Product('Refrigerator2', 'Frost', 15000, true)
    ];
  }

  initCartItems(): Array<CartItem> {
    const products = this.getPurchasedProducts();
    this.cartItems = new Array<CartItem>();

    products.forEach(element => {
      this.pushProduct(element);
    });
    return this.cartItems;
  }

  getCartItems(): Array<CartItem> {
    return this.cartItems;
  }

  pushProduct(product: Product): Array<CartItem> {
    let exist = false;
    this.cartItems.forEach(item => {
      if (item.product.name ===  product.name) {
        item.price += product.price;
        item.quant += 1;
        exist = true;
      }
    });
    if (!exist) {
      this.cartItems.push(new CartItem(product, product.price, 1));
    }
    return this.cartItems;
  }
}
