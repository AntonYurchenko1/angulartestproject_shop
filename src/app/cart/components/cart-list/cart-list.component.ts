import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { CartItem } from './../../models/cart-item.model';
import { CartService } from './../../services/cart.service';
import { CommunicatorService } from './../../../shared/services/communicator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subProduct: Subscription;
  sortField = 'price';
  sortItems = [{
    id: 'price',
    label: 'Price',
  }, {
    id: 'quant',
    label: 'Quantity',
  }, {
    id: 'name',
    label: 'Product name',
  }];

  constructor(
    public cartService: CartService,
    private communicatorService: CommunicatorService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('CartListComponent ngOnInit ');
    this.subProduct = this.communicatorService.channelProduct$.subscribe(
      p => (this.cartService.pushProduct(p))
    );
    this.cartService.initCartItems();
  }

  ngOnDestroy() {
    this.subProduct.unsubscribe();
  }

  onDelete(cartitem: CartItem): void {
    this.cartService.deleteCartItem(cartitem);
  }

  onSortChange(sortValue) {
    this.sortField = sortValue;
  }

  onClose() {
    this.router.navigate([{ outlets: { cart: null } }]);
    this.cartService.isDisplayed = false;
  }


}
