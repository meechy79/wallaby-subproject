import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubProjectModule } from 'subproject';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
