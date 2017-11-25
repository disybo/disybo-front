import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { ApiService } from './core/api.service';
//import { Hello } from './hello.model';

@Injectable()
export class ExampleApiService extends ApiService {
    //** API controller */
    controller = 'hello';

    ///** The hello subject */
    //private _hello: BehaviorSubject<Hello> = new BehaviorSubject(new Hello());

    ///** The hello observable getter */
    //get hello(): Observable<Hello> {
    //    return new Observable(fn => this._hello.subscribe(fn));
    //}

    public hello(): void {
        this.getRequest('hi', []).subscribe(data => {
            //this._hello.next(data);
            console.log('GOT: ', data)
        });
    }
}
