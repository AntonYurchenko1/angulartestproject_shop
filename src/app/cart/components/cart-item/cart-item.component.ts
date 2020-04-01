import { Component,
  Input,
  Output,
  AfterViewInit,
  ElementRef,
  ViewChild,
  EventEmitter
  } from '@angular/core';
import { CartItem } from './../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements AfterViewInit {
  constructor() { }

  itemColor = 'yellow';

  @Input()
  cartitemIn: CartItem;

  @ViewChild('quantField')
  quantInputField: ElementRef<HTMLInputElement>;

  @Output()
  deleteCartItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  ngAfterViewInit() {
    this.quantInputField.nativeElement.value = this.cartitemIn.quant.toString();
  }

  onDelete(): void {
    console.log('delete cart item for product ', this.cartitemIn.product);
    this.deleteCartItem.emit(this.cartitemIn);
  }

  onChangeQuant(quantField: HTMLInputElement): void {
    this.cartitemIn.quant = parseInt(quantField.value, 10);
    if (this.cartitemIn.quant < 1) {
      this.cartitemIn.quant = 1;
      this.quantInputField.nativeElement.value = this.cartitemIn.quant.toString();
    }
    this.cartitemIn.price = this.cartitemIn.product.price * this.cartitemIn.quant;
    this.cartitemIn.updateDate = Date.now();
    console.log('change number of products in cart item to ', this.cartitemIn.quant);
  }

}
