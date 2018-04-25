import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {SupportComponent} from './components/support/support.component';
import {UserMainComponent} from './components/main/user-main/user-main.component';
import {EditorComponent} from './components/user/editor/editor.component';
import {MenuComponent} from './components/menu/menu.component';
import { AdminMainComponent } from './components/main/admin-main/admin-main.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AdminDashboardComponent} from './components/dashboard/admin-dashboard/admin-dashboard.component';
import {UserDashboardComponent} from './components/dashboard/user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'support', component: SupportComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'dashboard', component: UserDashboardComponent},
  {path: 'user/:uid', component: UserMainComponent},
  {path: 'user', component: UserMainComponent},
  {path: 'test', component: UserMainComponent},
  {path: 'admin', component: AdminMainComponent},
  {path: '**', component: MainPageComponent},
];

export const Routing = RouterModule.forRoot(appRoutes);

