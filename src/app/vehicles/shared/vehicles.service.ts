import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Vehicle } from '../../vehicles-registry/shared/vehicle.model';
import { VehicleType } from '../shared/vehicletype.model';
import { VehicleTypeData } from '../shared/vehicleTypeData.model';
import { Fuel } from '../../stations/shared/fuel.model';

@Injectable()
export class VehiclesService extends ApiService {
  controller: string = "vehicles";
  
  //** The vehicleAlertList subject */
  private vehicleAlertList: BehaviorSubject<Vehicle[]> = new BehaviorSubject([]);
  private vehicleTypesList: BehaviorSubject<VehicleType[]> = new BehaviorSubject([]);
  private vehicleTypeData: BehaviorSubject<VehicleTypeData> = new BehaviorSubject(new VehicleTypeData);

  get alerts(): Observable<Vehicle[]> {
    return new Observable(fn => this.vehicleAlertList.subscribe(fn));
  }

  get types(): Observable<VehicleType[]> {
    return new Observable(fn => this.vehicleTypesList.subscribe(fn));
  }

  get typedata(): Observable<VehicleTypeData> {
    return new Observable(fn => this.vehicleTypeData.subscribe(fn));
  }

  public getVehicleAlerts(): void {
    this.getRequest('alerts')
    .subscribe(data => {
        this.vehicleAlertList.next(data);
      });
  }

  public getVehicleTypes(): void {
    this.getRequest('types')
    .subscribe(data => {
        console.log(data)
        this.vehicleTypesList.next(data);
      });
  }

  public getVehiclyTypeData(id: string): void {
    this.getRequest('fuel/consumption/type', [
      {key: 'id', value: id}
    ])
    .subscribe(data => {
        let temp_data = new VehicleTypeData()
        temp_data.name = data[0].vehicle_type;
        data[0].fuel_data.forEach(element => {
          temp_data.data.push(new Fuel(element.month, element.fuel_volume))
        });
        this.vehicleTypeData.next(temp_data);
      });
  }


}