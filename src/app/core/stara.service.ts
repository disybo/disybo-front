import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export abstract class StaraService {
  url: string = 'https://dev-stara.elisaiot.com/Thingworx/Things/Stara/Services/Location';

  constructor(private http: HttpClient) {}


  protected getLocation(vehicle: string, start: number, end: number): any {
      let header = new HttpHeaders({
        'Accept': 'application/json',
        'appkey': 'f848dba8-adc9-45e5-9771-b51b0ffa700a',
        'Content-Type': 'application/json',
        'x-thingworx-session':'true'
    });
    console.log("HEADER", header)
    return this.http
    .post(this.url, {
        "Name": vehicle,
        "maxItems": 10,
        "startDate": start,
        "endDate": end
    }, {
        headers: header
    })
  }
}
