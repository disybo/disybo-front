import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from './stations.component';
import { StationsFuelPumpedComponent } from './stations-fuel-pumped/stations-fuel-pumped.component';
import { StationsFuelConsumptionComponent } from './stations-fuel-consumption/stations-fuel-consumption.component';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDatepickerModule
  ],
  declarations: [StationsComponent, StationsFuelPumpedComponent, StationsFuelConsumptionComponent]
})
export class StationsModule { }
