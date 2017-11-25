import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './route.module';

import { ExampleApiService } from './exampleApi.service';

import { VehicleModule } from './vehicle/vehicle.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehiclesRegistryModule } from './vehicles-registry/vehicles-registry.module';
import { StationModule } from './station/station.module';
import { StationsModule } from './stations/stations.module';
import { StationsRegistryModule } from './stations-registry/stations-registry.module';
import { FrontPageModule } from './front-page/front-page.module'

import { secret } from '../environments/secret';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: secret.mapKey
    }),

    AppRoutingModule,
    VehicleModule,
    VehiclesModule,
    VehiclesRegistryModule,
    StationModule,
    StationsModule,
    StationsRegistryModule,
    FrontPageModule
  ],
  providers: [ExampleApiService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
