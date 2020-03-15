import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private channelProduct = new Subject<Product>();

  public channelProduct$ = this.channelProduct.asObservable();

  publishProduct(p: Product) {
    this.channelProduct.next(p);
  }
}
