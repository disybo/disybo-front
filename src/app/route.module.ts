import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesRegistryComponent } from './vehicles-registry/vehicles-registry.component';
import { StationsComponent } from './stations/stations.component';
import { StationsRegistryComponent } from './stations-registry/stations-registry.component';

const appRoutes: Routes = [
    { path: 'analytics/vehicles', component: VehiclesComponent },
    { path: 'analytics/stations', component: StationsComponent },
    { path: 'registry/vehicles', component: VehiclesRegistryComponent },
    { path: 'registry/stations', component: StationsRegistryComponent },
    { path: '**', component: VehiclesComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
