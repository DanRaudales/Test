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

  places: any;

  baseLayers: any;

  customControl : any;

  mbAttr: any;

  mbUrl: any;

  grayscale: any;

  streets: any;

  coo: any;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public http: HttpClient
  ) {

  }

  ionViewDidLoad(){

    this.http.get('http://192.168.0.8:3000/api/lugares').subscribe((res) =>{
      this.places = res;
      console.log(res);
      this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

      this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      this.grayscale   = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.light'}),
	  	this.streets  = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.streets'});

      this.map = Leaflet.map('map', {
        center: [19.395893, -99.092330],
        zoom: 12,
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
            map.setView([19.395893, -99.092330], 12);
          }
          return this.container;
        },
      });

      this.map.addControl(new this.customControl());

      this.places.forEach(ss => {
        //console.log(ss)
        //this.coo = Leaflet.polygon([ss.COORDENADAS.lat,ss.COORDENADAS.lng])
        let coor:any[] = [ss.COORDENADAS.lat,ss.COORDENADAS.lng];
        //console.log(coor);
        Leaflet.marker([coor[0],coor[1]]).bindPopup(ss.NOM_CORTO_PRESTATARIO).on('contextmenu', () => {
          this.details(ss);
        }).addTo(this.map);
      });

    },(error)=>{console.log(error)})



  }

  abrirMenu(){
    this.menuCtrl.toggle();
  }

  details(a) {
    this.navCtrl.push(DetailsPage, { escuela: a});
  }

}
