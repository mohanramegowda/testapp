import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldConfigurationEngineComponent } from './shared/components/field-configuration-engine/field-configuration-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldConfigurationEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
