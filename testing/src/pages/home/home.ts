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
  text: any;

  constructor(
    public navCtrl: NavController,
    private geo: Geolocation,
    private platform: Platform,
  ) {
    if(this.platform.is('android')){
      console.log('I\'m running on Android Device');
      this.getPosition();
    }
  }

  getPosition(){
    var options = {
      timeout: 5000
    };

    this.geo.getCurrentPosition(options).then(resp => {
      //console.log(resp.coords.latitude);
      //console.log(resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit():void{
    this.drawMap();
  }

  drawMap(){
    this.getPosition();
    this.map = Leaflet.map('map').fitWorld();
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = Leaflet.featureGroup();
      let marker: any = Leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
  }

}
