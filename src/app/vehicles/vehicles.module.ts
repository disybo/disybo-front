import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { VehiclesComponent } from './vehicles.component';
import { FuelConsumptionComponent } from './fuel-consumption/fuel-consumption.component';
import { VehiclesFilterComponent } from './vehicles-filter/vehicles-filter.component';
import { VehiclesPollutionComponent } from './vehicles-pollution/vehicles-pollution.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ChartsModule,
    FlexLayoutModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [VehiclesComponent, FuelConsumptionComponent, VehiclesFilterComponent, VehiclesPollutionComponent, VehicleListComponent],
  exports: [VehiclesComponent]
})
export class VehiclesModule { }
