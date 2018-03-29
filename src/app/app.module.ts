import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Routing } from './app.routing';
import { SupportComponent } from './components/support/support.component';
import { HeaderComponent } from './components/header-footer/header/header.component';
import { FooterComponent } from './components/header-footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SupportComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
