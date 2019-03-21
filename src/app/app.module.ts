import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './public/navigation/navigation.component';
import { MobileNavigationComponent } from './public/mobile-navigation/mobile-navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error-intercesptor';
import { mockBackendProvider } from './core/helpers/mock-backend';
import { AlertComponent } from './public/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MobileNavigationComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    mockBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
