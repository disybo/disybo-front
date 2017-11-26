import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './shared/vehicles.service'
import { Vehicle } from '../shared/models/vehicle.model'
import { VehicleType } from './shared/vehicletype.model';
import { VehicleTypeData } from './shared/vehicleTypeData.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicleAlerts: any
  vehicleTypes: VehicleType[]
  vehicleTypeData: VehicleTypeData
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() { 
    this.vehiclesService.alerts.subscribe(update => this.vehicleAlerts = update)
    this.vehiclesService.types.subscribe(update => this.vehicleTypes = update)
    this.vehiclesService.typedata.subscribe(update => this.vehicleTypeData = update)
    this.vehiclesService.getVehicleAlerts()
    this.vehiclesService.getVehicleTypes()
    this.vehiclesService.getVehiclyTypeData("B1")
  }

  refresh(data:any) {
    this.vehiclesService.getVehiclyTypeData(data.id)
  }
}
