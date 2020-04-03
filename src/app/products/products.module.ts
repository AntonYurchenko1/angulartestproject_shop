import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductsService} from './services/products.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    SharedModule
  ],
  // providers: [ProductsService],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
