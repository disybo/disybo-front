import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Station } from './station.model';

@Injectable()
export class StationsService extends ApiService {
    //** API controller */
    controller = 'stations';

    //** The hello subject */
    private _stations: BehaviorSubject<Station[]> = new BehaviorSubject([]);

    //** The hello observable getter */
    get stations(): Observable<Station[]> {
        return new Observable(fn => this._stations.subscribe(fn));
    }

    public getStations(): void {
        this.getRequest('', []).subscribe(data => {
            this._stations.next(data);
        });
    }
}