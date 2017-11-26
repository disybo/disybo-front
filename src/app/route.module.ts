import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesRegistryComponent } from './vehicles-registry/vehicles-registry.component';
import { StationComponent } from './station/station.component';
import { StationsComponent } from './stations/stations.component';
import { StationsRegistryComponent } from './stations-registry/stations-registry.component';

const appRoutes: Routes = [
    { path: 'analytics/vehicles', component: VehiclesComponent },
    { path: 'analytics/stations', component: StationsComponent },
    { path: 'registry/vehicles', component: VehiclesRegistryComponent },
    { path: 'registry/stations', component: StationsRegistryComponent },
    { path: 'vehicle/:id', component: VehicleComponent },
    { path: 'station/:id', component: StationComponent },
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
