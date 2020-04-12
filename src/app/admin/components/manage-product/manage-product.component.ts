import { Component, Input, Output,  EventEmitter  } from '@angular/core';
import { Product } from './../../../products/models/product.model';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {

  @Input()
  product: Product;

  @Output()
  editProduct: EventEmitter<Product> = new EventEmitter<Product>();

  onEditProduct() {
    console.log('edit product event ', this.product);
    this.editProduct.emit(this.product);
  }
}

