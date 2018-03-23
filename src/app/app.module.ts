import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CroppieModule } from 'angular-croppie-module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CroppieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
