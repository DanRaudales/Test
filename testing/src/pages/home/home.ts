import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details'

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
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit():void{
    this.upiicsa = [19.395893, -99.092330];
    this.escom = [19.504537, -99.146931];
    this.upiita = [19.511614, -99.126188];
    this.drawMap();
  }

  drawMap(): void {
    
    this.map = Leaflet.map('map').setView([19.4293208,-99.133871], 12);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);
    Leaflet.marker(this.upiicsa).addTo(this.map).bindPopup('UPIICSA').on('contextmenu', () => {
      this.details('UPIICSA');
    });
    //Leaflet.circle(this.upiicsa, { radius: 200, color: 'teal'}).addTo(this.map).bindPopup('UPIICSA');
    Leaflet.marker(this.escom).addTo(this.map).bindPopup('ESCOM').on('contextmenu', () => {
      this.details('ESCOM');
    });
    Leaflet.marker(this.upiita).addTo(this.map).bindPopup('<a href = "https://www.upiita.ipn.mx/" target = "_blank">UPIITA</a>').on('contextmenu', () => {
      this.details('UPIITA');
    });
  }

  details(a){    
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a });
    modal.present();

  }

}
