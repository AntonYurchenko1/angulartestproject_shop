import { Component, Input, Output,  EventEmitter  } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input()
  product: Product;

  @Output()
  addBasket: EventEmitter<Product> = new EventEmitter<Product>();

  onAddBasket(): void {
     if (this.product.isAvailable) {
      console.log('add basket event ', this.product);
      this.addBasket.emit(this.product);
     }
  }
}
