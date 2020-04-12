import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageProductsComponent, ManageProductComponent, ManageProductFormComponent } from './';
import { ManageProductResolveGuard } from './guards';
import { AuthGuard, CanDeactivateGuard } from './../core';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ManageProductsComponent },
          {
            path: 'products/edit/:productID',
            component: ManageProductFormComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              product: ManageProductResolveGuard
            }

          },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageProductComponent,
    ManageProductFormComponent
  ];
}
