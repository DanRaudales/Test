import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  getData() {
    return this.http.get('https://randomuser.me/api/?results=5&nat=us');
  }
  

}
