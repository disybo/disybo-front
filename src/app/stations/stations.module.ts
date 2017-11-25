import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from './stations.component';
import { StationsFuelPumpedComponent } from './stations-fuel-pumped/stations-fuel-pumped.component';
import { StationsFuelConsumptionComponent } from './stations-fuel-consumption/stations-fuel-consumption.component';
import { StationsFilterComponent } from './stations-filter/stations-filter.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatNativeDateModule} from '@angular/material'
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { StationsOverallComparisonComponent } from './stations-overall-comparison/stations-overall-comparison.component';
import { StationsFuelTypeComponent } from './stations-fuel-type/stations-fuel-type.component';






@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [StationsComponent, StationsFuelPumpedComponent, StationsFuelConsumptionComponent, StationsFilterComponent, StationsOverallComparisonComponent, StationsFuelTypeComponent]
})
export class StationsModule { }
