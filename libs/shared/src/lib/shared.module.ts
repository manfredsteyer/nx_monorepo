import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerApiModule } from '@flights/passenger-api';

@NgModule({
  imports: [CommonModule, PassengerApiModule]
})
export class SharedModule {}
