import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {Routing} from './app.routing';
import {UserService} from './services/user.service.client';
import {StatusService} from './services/status.service.client';
import {FlickrService} from './services/flickr.service.client';
import {ImageService} from './services/image.service.client';
import {HttpClientModule} from '@angular/common/http';
import {SupportComponent} from './components/support/support.component';
import {HeaderComponent} from './components/header-footer/header/header.component';
import {FooterComponent} from './components/header-footer/footer/footer.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {EditorComponent} from './components/user/editor/editor.component';
import {MenuComponent} from './components/menu/menu.component';
import {UserDashboardComponent} from './components/dashboard/user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './components/dashboard/admin-dashboard/admin-dashboard.component';
import {UploaderComponent} from './components/user/uploader/uploader.component';
import {UserDetailComponent} from './components/dashboard/admin-dashboard/user-detail/user-detail/user-detail.component';
import { GalleryComponent } from './components/user/gallery/gallery.component';
import {DisplayComponent} from "./components/user/display/display.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SupportComponent,
    HeaderComponent,
    FooterComponent,
    EditorComponent,
    MenuComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UploaderComponent,
    UserDetailComponent,
    GalleryComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, StatusService, FlickrService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
