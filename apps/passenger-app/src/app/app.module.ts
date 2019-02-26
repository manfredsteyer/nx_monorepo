import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PassengerApiModule } from '@flights/passenger-api';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PassengerApiModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
