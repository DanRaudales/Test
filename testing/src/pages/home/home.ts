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

  baseLayers: any;

  customControl : any;

  mbAttr: any;

  mbUrl: any;

  grayscale: any;

  streets: any;


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

      this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

      this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      this.grayscale   = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.light'}),
	  	this.streets  = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.streets'});

      this.map = Leaflet.map('map', {
        center: [42.367386, -71.093605],
        zoom: 14,
        maxZoom: 18,
        layers: [this.streets]
      });

      this.baseLayers = {
        "Streets": this.streets,
        "Grayscale": this.grayscale
      };

      Leaflet.control.layers(this.baseLayers).addTo(this.map)

      this.customControl = Leaflet.Control.extend({
        options: {
          position: 'topleft'
        },

        onAdd: function (map) {
          this.container = Leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

          this.container.style.backgroundColor = 'white';
          this.container.style.backgroundImage = "url(assets/imgs/home-13.png)";
          this.container.style.backgroundRepeat = 'no-repeat';
          this.container.style.backgroundPosition = 'center';
          this.container.style.backgroundSize = "25px 25px";
          this. container.style.width = '34px';
          this.container.style.height = '34px';

          this.container.onclick = function(){
            map.setView([42.367386, -71.093605], 14);
          }
          return this.container;
        },
      });

      this.map.addControl(new this.customControl());

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
