import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './public/navigation/navigation.component';
import { MobileNavigationComponent } from './public/mobile-navigation/mobile-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
