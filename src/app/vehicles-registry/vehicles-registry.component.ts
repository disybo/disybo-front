import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './shared/vehicles.service';
import { Vehicle } from './shared/vehicle.model';

@Component({
  selector: 'app-vehicles-registry',
  templateUrl: './vehicles-registry.component.html',
  styleUrls: ['./vehicles-registry.component.css']
})
export class VehiclesRegistryComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private service: VehiclesService) { }

  ngOnInit() {
    this.service.vehicles.subscribe(update => this.vehicles = update)
    this.service.getVehicles()
  }

  searchFn(query: any) {
    console.log("SEARCH", query)
  }
}
