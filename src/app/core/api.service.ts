import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private url: string = environment.apiUrl
  constructor() {}

}
