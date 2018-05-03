import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  data: any;
  estado: any;
  latitude: any;
  longitude: any;
  upiicsa: any;
  escom: any;
  upiita: any;

  constructor(
    public navCtrl: NavController,
    private geo: Geolocation,
    private platform: Platform
  ) {
  this.platform.ready().then(() => {
    
      var options = {
        timeout: 5000
      };

      this.geo.getCurrentPosition(options).then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      }).catch((error) => {
        console.log("Error to get location ", error);
      });

    });
  }

  ngOnInit():void{
    this.upiicsa = [19.395893, -99.092330];
    this.escom = [19.504537, -99.146931];
    this.upiita = [19.511614, -99.126188];
    this.drawMap();
  }

  drawMap(): void {
    
    this.map = Leaflet.map('map').setView([19.3910038,-99.2837002], 11);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);
    Leaflet.marker(this.upiicsa).addTo(this.map).bindPopup('UPIICSA');
    Leaflet.marker(this.escom).addTo(this.map).bindPopup('ESCOM');
    Leaflet.marker(this.upiita).addTo(this.map).bindPopup('<a href = "https://www.upiita.ipn.mx/" target = "_blank">UPIITA</a>');
  }

  details(a){
    alert(a);
  }

}
