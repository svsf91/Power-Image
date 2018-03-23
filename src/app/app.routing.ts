import {Routes, RouterModule} from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

const appRoutes: Routes = [
    {path: '', component: MainPageComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);

