import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubProjectComponentModule } from 'subproject';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubProjectComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
