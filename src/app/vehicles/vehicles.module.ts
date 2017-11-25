import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VehiclesComponent } from './vehicles.component';
import { FuelConsumptionComponent } from './fuel-consumption/fuel-consumption.component';
import { VehiclesFilterComponent } from './vehicles-filter/vehicles-filter.component';
import { VehiclesPollutionComponent } from './vehicles-pollution/vehicles-pollution.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ChartsModule,
    FlexLayoutModule
  ],
  declarations: [VehiclesComponent, FuelConsumptionComponent, VehiclesFilterComponent, VehiclesPollutionComponent],
  exports: [VehiclesComponent]
})
export class VehiclesModule { }
