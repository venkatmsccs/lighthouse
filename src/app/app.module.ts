import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LhcicomponentComponent } from './lhcicomponent/lhcicomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LhcicomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
