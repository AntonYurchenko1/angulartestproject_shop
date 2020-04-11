import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.product = new Product(null, '', '' , 0, false);
  }

  onSaveProduct() {
    console.log('onSaveProduct');
    const product = { ...this.product } as Product;

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }
  }

  onGoBack(): void {}


}
