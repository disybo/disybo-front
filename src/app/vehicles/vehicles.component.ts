import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './shared/vehicles.service'
import { Vehicle } from '../shared/models/vehicle.model'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicleAlerts: any
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() { 
    this.vehiclesService.alerts.subscribe(update => this.vehicleAlerts = update)
    this.vehiclesService.getVehicleAlerts()
  }
}
