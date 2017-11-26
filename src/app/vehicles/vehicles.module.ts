import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { VehiclesComponent } from './vehicles.component';
import { FuelConsumptionComponent } from './fuel-consumption/fuel-consumption.component';
import { VehiclesFilterComponent } from './vehicles-filter/vehicles-filter.component';
import { VehiclesPollutionComponent } from './vehicles-pollution/vehicles-pollution.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclesService } from './shared/vehicles.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ChartsModule,
    FlexLayoutModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  declarations: [VehiclesComponent, FuelConsumptionComponent, VehiclesFilterComponent, VehiclesPollutionComponent, VehicleListComponent],
  exports: [VehiclesComponent],
  providers: [VehiclesService]
})
export class VehiclesModule { }
