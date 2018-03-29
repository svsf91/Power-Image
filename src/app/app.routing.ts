import {Routes, RouterModule} from '@angular/router';
<<<<<<< HEAD
import { MainPageComponent } from './components/main-page/main-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
=======
import {MainPageComponent} from './components/main-page/main-page.component';
import {SupportComponent} from './components/support/support.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'support', component: SupportComponent}
>>>>>>> origin/master
];

export const Routing = RouterModule.forRoot(appRoutes);

