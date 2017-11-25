import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';

import { VehiclesComponent } from './vehicles.component';
import { FuelConsumptionComponent } from './fuel-consumption/fuel-consumption.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ChartsModule,
  ],
  declarations: [VehiclesComponent, FuelConsumptionComponent],
  exports: [VehiclesComponent]
})
export class VehiclesModule { }
