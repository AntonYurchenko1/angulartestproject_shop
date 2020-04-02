import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightItemDirective } from './directives/highlight-item.directive';
import { ClickItemDirective } from './directives/click-item.directive';
import { OrderByPipe } from './pipes/order-by.pipe';


const dirs = [HighlightItemDirective, ClickItemDirective, OrderByPipe];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...dirs],
  exports: [...dirs]
})
export class SharedModule { }
