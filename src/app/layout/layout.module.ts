import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent, PathNotFoundComponent } from './components';


@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent],
  imports: [
    SharedModule
  ],
  exports: [
    AboutComponent
  ]
})
export class LayoutModule { }


