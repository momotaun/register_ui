import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LandingComponent } from './components/pages/home/elements/landing/landing.component';
import { ServiceComponent } from './components/pages/home/elements/service/service.component';
import { AboutComponent } from './components/pages/home/elements/about/about.component';
import { ContactComponent } from './components/pages/home/elements/contact/contact.component';
import { FooterComponent } from './components/pages/home/elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
