import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightItemDirective } from './directives/highlight-item.directive';
import { ClickItemDirective } from './directives/click-item.directive';
import { OrderByPipe } from './pipes/order-by.pipe';


const dirs = [HighlightItemDirective, ClickItemDirective, OrderByPipe];
const mods = [CommonModule, FormsModule];

@NgModule({
  imports: [...mods],
  declarations: [...dirs],
  exports: [...dirs, ...mods]
})
export class SharedModule { }
