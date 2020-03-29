import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightItemDirective } from './directives/highlight-item.directive';
import { ClickItemDirective } from './directives/click-item.directive';


const dirs = [HighlightItemDirective, ClickItemDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...dirs],
  exports: [...dirs]
})
export class SharedModule { }
