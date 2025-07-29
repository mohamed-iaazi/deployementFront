import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login';
import {Home} from './home/home';
import {RegisterComponent} from './auth/register/register';
import {ResetPassword} from './auth/reset-password/reset-password';
import {Dashboard} from './admin/dashboard/dashboard';

export const routes: Routes = [


  { path: 'home', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetPassword', component: ResetPassword },
  { path: 'dashboard', component: Dashboard },


];
