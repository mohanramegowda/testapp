import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
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
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
