import { VehicleLocation } from './shared/vehiclelocation.model';
import { LocationService } from './shared/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  location: VehicleLocation

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.location.subscribe(update => this.location = update);
    //this.locationService.updateLocation("A31204");
  }

}
