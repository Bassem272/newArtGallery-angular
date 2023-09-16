import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},{
    path:'register',component:RegisterComponent },{
      path:'admin-login',component:AdminLoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
