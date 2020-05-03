import { Product } from './../../products/models/product.model';

export class CartItem {
  constructor(
    public id: number,
    public orderId: number,
    public product: Product,
    public price: number,
    public quant: number,
    public updateDate: number,
    public name: string) {}
}
