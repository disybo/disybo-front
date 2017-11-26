import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { VehiclesRegistryComponent } from './vehicles-registry.component';
import { VehiclesRegistrySearchComponent } from './vehicles-registry-search/vehicles-registry-search.component';
import { VehiclesRegistryListComponent } from './vehicles-registry-list/vehicles-registry-list.component';
import { VehiclesService } from './shared/vehicles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  declarations: [VehiclesRegistryComponent, VehiclesRegistrySearchComponent, VehiclesRegistryListComponent],
  providers: [VehiclesService]
})
export class VehiclesRegistryModule { }
