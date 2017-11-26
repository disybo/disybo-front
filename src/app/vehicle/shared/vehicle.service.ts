import { VehicleConsumption } from './vehicleconsumption.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';


@Injectable()
export class VehicleService extends ApiService {
    //** API controller */
    controller = 'vehicles';

    month: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
     "November",
     "December",
    ];

    //** The Fuel subject */
    private _consumption: BehaviorSubject<VehicleConsumption> = new BehaviorSubject(new VehicleConsumption());

    //** The Fuel observable getter */
    get consumption(): Observable<VehicleConsumption> {
        return new Observable(fn => this._consumption.subscribe(fn));
    }

    public getConsumption(): void {
        this.getRequest('fuel/consumption/2566', [
        ]).subscribe(data => {
           let consumption = new VehicleConsumption();
           data[0].fuel_data.forEach(e => {
             consumption.data.push(e.fuel_volume);
             consumption.labels.push(this.month[new Date(e.month).getMonth()]);
           });
            this._consumption.next(consumption);
        });
    }
}