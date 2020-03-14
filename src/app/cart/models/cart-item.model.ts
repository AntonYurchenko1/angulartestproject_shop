import { Product } from './../../products/models/product.model';

export class CartItem {
  constructor(public product: Product, public price: number, public quant: number) {}
}
