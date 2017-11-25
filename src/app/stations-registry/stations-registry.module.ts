import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StationsRegistryComponent } from './stations-registry.component';
import { StationsRegistryListComponent } from './stations-registry-list/stations-registry-list.component';
import { StationsRegistrySearchComponent } from './stations-registry-search/stations-registry-search.component';

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
  declarations: [StationsRegistryComponent, StationsRegistryListComponent, StationsRegistrySearchComponent]
})
export class StationsRegistryModule { }
