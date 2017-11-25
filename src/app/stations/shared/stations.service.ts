import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';

import { Fuel } from './fuel.model';
import { OverallData } from './overall.model';
import { FuelTypeData } from './fueltype.model'
import { Consumption, StationConsumption } from './consumption.model';

@Injectable()
export class StationsService extends ApiService {
    //** API controller */
    controller = 'stations';

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
    private _fuel: BehaviorSubject<Fuel[]> = new BehaviorSubject([]);
    private _overall: BehaviorSubject<OverallData> = new BehaviorSubject(new OverallData)
    private _fueltype: BehaviorSubject<FuelTypeData> = new BehaviorSubject(new FuelTypeData)
    private _consumption: BehaviorSubject<Consumption> = new BehaviorSubject(new Consumption)

    //** The Fuel observable getter */
    get fuel(): Observable<Fuel[]> {
        return new Observable(fn => this._fuel.subscribe(fn));
    }

    get overall(): Observable<OverallData> {
        return new Observable(fn => this._overall.subscribe(fn));
    }

    get fueltype(): Observable<FuelTypeData> {
        return new Observable(fn => this._fueltype.subscribe(fn));
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

    public getFuelTypeStatistics(startDate: Date, endDate: Date): void {
        this.getRequest('fuel/type', [
          {key: 'start', value: startDate.toJSON()}, 
          {key: 'end', value: endDate.toJSON()}
        ]).subscribe(data => {
            let fuelTypeData = new FuelTypeData;
            data.forEach(element => {
                fuelTypeData.labels.push(element.display_name);
                let fuel_data = []
                element.fuel_volume.forEach(fuel_type => {
                    if (fuel_type.amount == null) {
                        fuel_data.push(new Fuel(fuel_type.fuel_name, 0))           
                    } else {
                        fuel_data.push(new Fuel(fuel_type.fuel_name, fuel_type.amount))           
                    }
                    
                }); 
                fuelTypeData.data.push(fuel_data)   
            });
            this._fueltype.next(fuelTypeData);
        });
    } 

    public getStationsConsumption(startDate: Date, endDate: Date): void {
        this.getRequest('fuel/granular', [
            {key: 'start', value: startDate.toJSON()}, 
            {key: 'end', value: endDate.toJSON()}
          ]).subscribe(data => {
            let consumption = new Consumption;
            data[0].fuel_data.forEach(element => {
                consumption.labels.push(this.month[new Date(element.month).getMonth()]);
            });
            data.forEach(e => {
                let station = new StationConsumption();
                station.label = e.display_name;
                e.fuel_data.forEach(d => {
                    station.data.push(d.fuel_volume);
                });
                consumption.data.push(station);
            });
            this._consumption.next(consumption);
          });
    }
}