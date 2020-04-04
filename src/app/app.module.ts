import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first/first.component';

import { CartComponent } from './cart/components/cart/cart.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CartModule,
    ProductsModule,
    OrdersModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
