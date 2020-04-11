import { Injectable } from '@angular/core';
import { Product } from './../../products/models/product.model';
import { CartItem } from './../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<CartItem>;
  totalQuant: number;
  totalPrice: number;

  constructor() { }

  getPurchasedProducts(): Array<Product> {
    return [
      new Product(1, 'Refrigerator1', 'NoFrost', 10000, true) ,
      new Product(2, 'Refrigerator1', 'NoFrost', 10000, true) ,
      new Product(3, 'Refrigerator2', 'Frost', 15000, true)
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

  deleteCartItem(cartitem: CartItem): void {
    for ( let i = 0; i < this.cartItems.length; i++) {
      if ( this.cartItems[i].product.name === cartitem.product.name) {
        this.cartItems.splice(i, 1);
        i--;
      }
    }
  }

  pushProduct(product: Product): void {
    let exist = false;
    this.cartItems.forEach(item => {
      if (item.product.name ===  product.name) {
        item.price += product.price;
        item.quant += 1;
        item.updateDate = Date.now();
        exist = true;
      }
    });
    if (!exist) {
      this.cartItems.push(new CartItem(product, product.price, 1, Date.now(), product.name));
    }

    this.updateCartData();
  }

  removeProduct(product: Product): void {
    this.cartItems.forEach(item => {
      if (item.product.name ===  product.name && item.quant > 0) {
        item.price -= product.price;
        item.quant -= 1;
      }
    });
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartItems.length = 0;
    this.updateCartData();
  }

  cartProducts(): Array<Product> {
    const products = new Array<Product>();
    this.cartItems.forEach(item => {
      products.push(item.product);
    });
    return products;
  }

  increaseQuantity(productName: string, quant: number): void {
    this.cartItems.forEach(item => {
      if (item.product.name ===  productName) {
        item.quant += quant;
        item.price += quant * item.product.price;
      }
    });
    this.updateCartData();
  }

  decreaseQuantity(productName: string, quant: number): void {
    this.cartItems.forEach(item => {
      if (item.product.name ===  productName) {
        const actualQuant = quant > item.quant ? item.quant : quant;
        item.quant -= actualQuant;
        item.price -= actualQuant * item.product.price;
      }
    });
    this.updateCartData();
  }

  totalQuantity(): number {
    let quant = 0;
    this.cartItems.forEach(item => {
      quant += item.quant;
    });
    return quant;
  }

  totalSum(): number {
    let sum = 0;
    this.cartItems.forEach(item => {
      sum += item.price; // не очевидно, что это сумма
    });
    return sum;
  }

  updateCartData(): void {
    this.totalQuant = this.totalQuantity();
    this.totalPrice = this.totalSum();
  }
}
