import { VehicleService } from './shared/vehicle.service';
import { VehicleLocation } from './shared/vehiclelocation.model';
import { LocationService } from './shared/location.service';
import { Component, OnInit } from '@angular/core';
import { VehicleConsumption } from './shared/vehicleconsumption.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  location: VehicleLocation
  consumptionData: VehicleConsumption = new VehicleConsumption()

  constructor(private locationService: LocationService, private service: VehicleService) { }

  ngOnInit() {
    this.locationService.location.subscribe(update => this.location = update);
    this.service.consumption.subscribe(update => this.consumptionData = update);
    this.service.getConsumption();
    //this.locationService.updateLocation("A31204");
  }

}
