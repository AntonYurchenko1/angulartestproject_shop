import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightItemDirective } from './directives/highlight-item.directive';



@NgModule({
  declarations: [HighlightItemDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightItemDirective
  ]
})
export class SharedModule { }
