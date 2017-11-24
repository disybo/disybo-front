import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { StationsComponent } from './stations/stations.component';

const appRoutes: Routes = [
    { path: 'vehicle', component: VehiclesComponent },
    { path: 'station',      component: StationsComponent },
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
