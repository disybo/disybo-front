import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

import { VehicleComponent } from './vehicle.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { VehicleConsumptionComponent } from './vehicle-consumption/vehicle-consumption.component';
import { LocationService } from './shared/location.service';
import { VehicleService } from './shared/vehicle.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AgmCoreModule
  ],
  declarations: [VehicleComponent, VehicleLocationComponent, VehicleConsumptionComponent],
  providers: [LocationService, VehicleService]
})
export class VehicleModule { }
