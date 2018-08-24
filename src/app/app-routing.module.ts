import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent/*,
    canActivate: [AuthGuard]*/
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
export const routing = RouterModule.forRoot(routes, { enableTracing: true })
*/

