import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';

import { Fuel } from './fuel.model';
import { OverallData } from './overall.model';
import { Consumption, StationConsumption } from './consumption.model';

@Injectable()
export class StationsService extends ApiService {
    //** API controller */
    controller = 'stations';

    //** The Fuel subject */
    private _fuel: BehaviorSubject<Fuel[]> = new BehaviorSubject([]);
    private _overall: BehaviorSubject<OverallData> = new BehaviorSubject(new OverallData)
    private _consumption: BehaviorSubject<Consumption> = new BehaviorSubject(new Consumption)

    //** The Fuel observable getter */
    get fuel(): Observable<Fuel[]> {
        return new Observable(fn => this._fuel.subscribe(fn));
    }

    get overall(): Observable<OverallData> {
        return new Observable(fn => this._overall.subscribe(fn));
    }

    get consumption(): Observable<Consumption> {
        return new Observable(fn => this._consumption.subscribe(fn));
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
            this._overall.next(overallData);
        });
    }

    public getStationsConsumption(startDate: Date, endDate: Date): void {
        this.getRequest('fuel/consumption', [
            {key: 'start', value: startDate.toJSON()}, 
            {key: 'end', value: endDate.toJSON()}
          ]).subscribe(data => {
            let consumption = new Consumption;
            data[0].data.forEach(element => {
                consumption.labels.push(element.date);
            });
            data.forEach(e => {
                let station = new StationConsumption();
                station.label = e.station;
                e.data.forEach(d => {
                    station.data.push(d.amount);
                });
                consumption.data.push(station);
            });
            this._consumption.next(consumption);
          });
    }
}