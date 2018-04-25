import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {SupportComponent} from './components/support/support.component';
import {EditorComponent} from './components/user/editor/editor.component';
import {MenuComponent} from './components/menu/menu.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AdminDashboardComponent} from './components/dashboard/admin-dashboard/admin-dashboard.component';
import {UserDashboardComponent} from './components/dashboard/user-dashboard/user-dashboard.component';
import {UserDetailComponent} from './components/dashboard/admin-dashboard/user-detail/user-detail/user-detail.component';

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
  {path: 'user/:uid', component: UserDashboardComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'user-detail', component: UserDetailComponent},
  {path: '**', component: MainPageComponent},
];

export const Routing = RouterModule.forRoot(appRoutes);

