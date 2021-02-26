import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
