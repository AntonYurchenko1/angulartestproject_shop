import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, PathNotFoundComponent, LoginComponent } from './layout';
import { CartListComponent } from './cart';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
