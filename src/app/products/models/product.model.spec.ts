import { Product } from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('name', 'descr', 10, true)).toBeTruthy();
  });
});
