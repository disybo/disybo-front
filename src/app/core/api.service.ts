import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export abstract class ApiService {
  abstract controller: string;

  constructor(private http: HttpClient) {}

  private createRequestOptions(params: any): Object {
    let httpParams = new HttpParams();
    console.log(params)
    params.forEach(e => {
      console.log(e)
      httpParams = httpParams.set(e.key, e.value)
    });
    console.log(httpParams)
    return {
     //headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
     params: httpParams, // /api/items/add?id=3
    }
  }

  private urlBuilder(action: string): string {
    return `${environment.apiUrl}/${this.controller}/${action}`;
  }

  private logRequest(type: string, action: string): any {
    console.log("Request: ", type, this.controller, action);
  }

  private logResponse(res: any): Observable<any> {
    console.log("Response: ", res);
    return res;
  }

  private handleError(err: any): Observable<string>{ []
    const errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error('ApiService', errMsg);
    return Observable.throw('ApiService', errMsg);
  }
  
  protected getRequest(action: string, params: any = []): any {
    this.logRequest('get', action);
    return this.http
    .get(this.urlBuilder(action), this.createRequestOptions(params))
    .map(res => this.logResponse(res))
    .catch(err => this.handleError(err))
  }

  protected postRequest(action: string, params: any = [], body: any): any {
    this.logRequest('post', action);
    return this.http
    .post(this.urlBuilder(action), body, this.createRequestOptions(params))
    .map(res => this.logResponse(res))
    .catch(err => this.handleError(err))
  }


}
