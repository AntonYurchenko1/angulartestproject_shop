import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { CartItem } from './../../models/cart-item.model';
import { CartService } from './../../services/cart.service';
import { CommunicatorService } from './../../../shared/services/communicator.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartitems: Array<CartItem>;
  private subProduct: Subscription;

  constructor(private cartService: CartService, private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getCartItems();
    this.subProduct = this.communicatorService.channelProduct$.subscribe(
      p => (this.cartService.pushProduct(this.cartitems, p))
    );
  }

  ngOnDestroy() {
    this.subProduct.unsubscribe();
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
