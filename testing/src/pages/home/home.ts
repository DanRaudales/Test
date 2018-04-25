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
      }).catch(() => {
        console.log("Error to get location");
      });

    });
  }

  ngOnInit():void{
    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('map').fitWorld();
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 12
    }).on('locationfound', (e) => {
      let markerGroup = Leaflet.featureGroup();
      var latLang = [this.latitude, this.longitude];
      let marker: any = Leaflet.marker(latLang).on('click', () => {
        alert('Tú estás aquí');
      });
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    });
  }

}
