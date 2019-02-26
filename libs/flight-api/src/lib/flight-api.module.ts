import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FlightService} from './services/flight.service';
import { SharedModule } from '@flights/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FlightApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlightApiModule,
      providers: [
        FlightService
      ]
    }
  }
}
