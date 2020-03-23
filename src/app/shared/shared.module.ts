import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightItemDirective } from './directives/highlight-item.directive';
import { ClickItemDirective } from './directives/click-item.directive';



@NgModule({
  declarations: [HighlightItemDirective, ClickItemDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightItemDirective,
    ClickItemDirective
  ]
})
export class SharedModule { }
