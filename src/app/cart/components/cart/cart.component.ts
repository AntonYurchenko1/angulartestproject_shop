import { Component, OnInit } from '@angular/core';
import { Product } from './../../../products/models/product.model';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<Product>;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getPurchasedProducts();
  }
}
