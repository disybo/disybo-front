import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';

import { VehicleComponent } from './vehicle.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    AgmCoreModule
  ],
  declarations: [VehicleComponent, VehicleLocationComponent]
})
export class VehicleModule { }
