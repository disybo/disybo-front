import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Vehicle } from './vehicle.model';

@Injectable()
export class VehiclesService  extends ApiService {
    //** API controller */
    controller = 'vehicles';

    //** The hello subject */
    private _vehicles: BehaviorSubject<Vehicle[]> = new BehaviorSubject([]);

    //** The hello observable getter */
    get vehicles(): Observable<Vehicle[]> {
        return new Observable(fn => this._vehicles.subscribe(fn));
    }

    public getVehicles(): void {
        this.getRequest('', []).subscribe(data => {
            this._vehicles.next(data);
        });
    }

    public queryVehicles(name: string, type: string, year: string): void {
      this.getRequest('', [
        {key: 'name', value: name},
        {key: 'type', value: type},
        {key: 'year', value: year}
      ]).subscribe(data => {
          this._vehicles.next(data);
      });
  }
}