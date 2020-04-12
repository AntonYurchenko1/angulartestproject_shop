import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminServicesModule } from './admin-services.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminRoutingModule.components
  ],
  imports: [
    SharedModule,
    AdminServicesModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
