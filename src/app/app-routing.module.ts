import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './admin/products/products.component';
import { CartComponent } from './user/cart/cart.component';
import { HomeComponent } from './user/home/home.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CheckoutComponent } from './user/checkout/checkout.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  // { path: '**', component: NotFoundComponent },// Other routes...
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
