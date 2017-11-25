import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from './stations.component';
import { StationsFuelPumpedComponent } from './stations-fuel-pumped/stations-fuel-pumped.component';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MatCardModule
  ],
  declarations: [StationsComponent, StationsFuelPumpedComponent]
})
export class StationsModule { }
