import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

import { VehicleComponent } from './vehicle.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { VehicleConsumptionComponent } from './vehicle-consumption/vehicle-consumption.component';
import { LocationService } from './shared/location.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FlexLayoutModule,
    MatCardModule,
    AgmCoreModule
  ],
  declarations: [VehicleComponent, VehicleLocationComponent, VehicleConsumptionComponent],
  providers: [LocationService]
})
export class VehicleModule { }
