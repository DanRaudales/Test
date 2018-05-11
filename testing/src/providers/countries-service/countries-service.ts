import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountriesServiceProvider {

  constructor(public http: HttpClient) {    
  }

  getUsers() {
    return this.http.get('https://www.mapquestapi.com/geocoding/v1/address?key=TkDQE6KALVhjibuCAgGK4t3X7dvzlFGJ&location=Mexico');
  }

}
