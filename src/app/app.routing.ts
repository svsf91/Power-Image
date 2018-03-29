import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SupportComponent} from './components/support/support.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'support', component: SupportComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);

