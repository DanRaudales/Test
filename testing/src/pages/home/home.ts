import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { HttpClient } from '@angular/common/http';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;

  favorites: any;

  cafeterias: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public http: HttpClient
  ) {    
    
  }

  ionViewDidLoad(){
    this.http.get('assets/data/cafeterias.json').subscribe(res =>{
      this.cafeterias = res;

      this.map = Leaflet.map('map').setView([42.367386, -71.093605], 14);
        Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {   
        maxZoom: 18  
      }).addTo(this.map);

      this.cafeterias.features.forEach(kfe => {
        console.log(kfe)
        Leaflet.marker([kfe.geometry.coordinates[1],kfe.geometry.coordinates[0]]).bindPopup(kfe.properties.f2).on('contextmenu', () => {
          this.details(kfe.properties.f2);
        }).addTo(this.map);
      });

    })

  }

  abrirMenu(){
    this.menuCtrl.toggle();
  }

  details(a) {
    this.navCtrl.push(DetailsPage, { escuela: a});
  }  

}
