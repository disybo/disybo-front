import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Vehicle } from '../../vehicles-registry/shared/vehicle.model';

@Injectable()
export class VehiclesService extends ApiService {
  controller: string = "vehicles";
  //** The vehicleAlertList subject */
  private vehicleAlertList: BehaviorSubject<Vehicle[]> = new BehaviorSubject([]);

  get alerts(): Observable<Vehicle[]> {
    return new Observable(fn => this.vehicleAlertList.subscribe(fn));
  }

  public getVehicleAlerts(): void {
    this.getRequest('alerts')
    .subscribe(data => {
        this.vehicleAlertList.next(data);
      });
  }
}