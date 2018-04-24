import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {SupportComponent} from './components/support/support.component';
import {UserMainComponent} from './components/main/user-main/user-main.component';
import {EditorComponent} from './components/user/editor/editor.component';
import {MenuComponent} from './components/menu/menu.component';
import { AdminMainComponent } from './components/main/admin-main/admin-main.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'support', component: SupportComponent},
  {path: 'user/:uid', component: UserMainComponent},
  {path: 'user', component: UserMainComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'test', component: UserMainComponent},
  {path: 'admin-test', component: AdminMainComponent},
  {path: 'editor', component: EditorComponent},
  {path: '**', component: MainPageComponent},
];

export const Routing = RouterModule.forRoot(appRoutes);

