import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent, PathNotFoundComponent, LoginComponent } from './components';


@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent, LoginComponent],
  imports: [
    SharedModule
  ],
  exports: [
    AboutComponent
  ]
})
export class LayoutModule { }


