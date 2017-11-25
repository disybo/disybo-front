import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';

import { Fuel } from './fuel.model';
import { OverallData } from './overall.model';

@Injectable()
export class StationsService extends ApiService {
    //** API controller */
    controller = 'stations';

    //** The Fuel subject */
    private _fuel: BehaviorSubject<Fuel[]> = new BehaviorSubject([]);
    private _overall: BehaviorSubject<OverallData> = new BehaviorSubject(new OverallData)

    //** The Fuel observable getter */
    get fuel(): Observable<Fuel[]> {
        return new Observable(fn => this._fuel.subscribe(fn));
    }

    get overall(): Observable<OverallData> {
        return new Observable(fn => this._overall.subscribe(fn));
    }

    public getOverallFuelData(startDate: Date, endDate: Date): void {
        this.getRequest('fuel/overall', [
          {key: 'start', value: startDate.toJSON()}, 
          {key: 'end', value: endDate.toJSON()}
        ]).subscribe(data => {
            let overallData = new OverallData;
            data.forEach(element => {
                if (element.fuel_volume != null) {
                    overallData.labels.push(element.display_name);
                    overallData.data.push(element.fuel_volume)
                }        
            });
            console.log(overallData)
            this._overall.next(overallData);
        });
    }
}