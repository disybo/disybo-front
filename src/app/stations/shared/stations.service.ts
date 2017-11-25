import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';

import { Fuel } from './fuel.model';

@Injectable()
export class StationsService extends ApiService {
    //** API controller */
    controller = 'stations';

    //** The Fuel subject */
    private _fuel: BehaviorSubject<Fuel[]> = new BehaviorSubject([]);

    //** The Fuel observable getter */
    get fuel(): Observable<Fuel[]> {
        return new Observable(fn => this._fuel.subscribe(fn));
    }

    public getFuelData(): void {
        this.getRequest('fuel/types', []).subscribe(data => {
            this._fuel.next(data);
        });
    }
}