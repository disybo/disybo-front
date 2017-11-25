import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VehiclesRegistryComponent } from './vehicles-registry.component';
import { VehiclesRegistrySearchComponent } from './vehicles-registry-search/vehicles-registry-search.component';
import { VehiclesRegistryListComponent } from './vehicles-registry-list/vehicles-registry-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [VehiclesRegistryComponent, VehiclesRegistrySearchComponent, VehiclesRegistryListComponent]
})
export class VehiclesRegistryModule { }
