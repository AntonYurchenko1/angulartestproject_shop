import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { CartItem } from './../../models/cart-item.model';
import { CartService } from './../../services/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartitems: Array<CartItem>;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getCartItems();
  }

  onDelete(cartitem: CartItem): void {
    for ( let i = 0; i < this.cartitems.length; i++) {
      if ( this.cartitems[i].product.name === cartitem.product.name) {
        this.cartitems.splice(i, 1);
        i--;
      }
    }
  }

}
