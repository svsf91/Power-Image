import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Routing } from './app.routing';
import {UserService} from './services/user.service.client';
import {StatusService} from './services/status.service.client';
import {FlickrService} from './services/flickr.service.client';
import {HttpClientModule} from '@angular/common/http';
import { SupportComponent } from './components/support/support.component';
import { HeaderComponent } from './components/header-footer/header/header.component';
import { FooterComponent } from './components/header-footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    SupportComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
],
  providers: [UserService, StatusService, FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
