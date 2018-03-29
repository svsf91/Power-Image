import {Routes, RouterModule} from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {SupportComponent} from './components/support/support.component';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'support', component: SupportComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);

