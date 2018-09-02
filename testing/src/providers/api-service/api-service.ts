import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  cafeterias: any;

  getData() {
    return this.http.get('assets/data/cafeterias.json');
    
  }
  

}
