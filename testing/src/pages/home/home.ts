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
  escuelas: any;
  mbAttr: any;
  mbUrl: any;
  grayscale: any;
  streets: any;
  baseLayers: any;
  overlays: any;
  icono: any;
  customControl: any;
  container: any;
  data: any;
  estado: any;
  latitude: any;
  longitude: any;
  upiicsa: any;
  escom: any;
  upiita: any;
  dg: any;
  circulo: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit():void{
    this.upiicsa = [19.395893, -99.092330];
    this.escom = [19.504537, -99.146931];
    this.upiita = [19.511614, -99.126188];
    this.dg = [19.499722, -99.137741]
    this.drawMap();
  }

  drawMap(): void {

    this.escuelas =  Leaflet.layerGroup();

    //Clase para iconos personalizados
    this.icono = Leaflet.icon({
      iconUrl: '../../assets/imgs/Escudo-UPIICSA.png',
  
      iconSize:     [45, 45], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });
    
    Leaflet.marker(this.upiicsa, {icon: this.icono}).addTo(this.escuelas).bindPopup('UPIICSA').on('contextmenu', () => {
      this.details('UPIICSA');
    });
    //Leaflet.circle(this.upiicsa, { radius: 200, color: 'teal'}).addTo(this.map).bindPopup('UPIICSA');
    Leaflet.marker(this.escom).addTo(this.escuelas).bindPopup('ESCOM').on('contextmenu', () => {
      this.details('ESCOM');
    });
    Leaflet.marker(this.upiita).addTo(this.escuelas).bindPopup('<a href = "https://www.upiita.ipn.mx/" target = "_blank">UPIITA</a>').on('contextmenu', () => {
      this.details('UPIITA');
    });
    
    this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

    this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    this.grayscale   = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.light', attribution: this.mbAttr}),
		this.streets  = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.streets',   attribution: this.mbAttr});
    
    this.map = Leaflet.map('map', {
      center: [19.4293208,-99.133871],
      zoom: 12,
      layers: [this.streets, this.escuelas]});

      this.baseLayers = {
        "Streets": this.streets,
        "Grayscale": this.grayscale
      };
  
      this.overlays = {
        "Escuelas": this.escuelas
      };

      Leaflet.control.layers(this.baseLayers, this.overlays).addTo(this.map);

      this.customControl = Leaflet.Control.extend({
        options: {
          position: 'topleft' 
        },
       
        onAdd: function (map) {
          this.container = Leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
 
          this.container.style.backgroundColor = 'white';
          this.container.style.backgroundImage = "url(../../assets/imgs/home-13.png)";
          this.container.style.backgroundSize = "25px 25px";
          this. container.style.width = '30px';
          this.container.style.height = '30px';
       
          this.container.onclick = function(){
            map.setView([19.4293208,-99.133871], 12);
          }
          return this.container;
        },
      });

      this.map.addControl(new this.customControl());

      this.circulo = Leaflet.circle(this.dg, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 300
      }).addTo(this.map).bindPopup("Instituto Politécnico Nacional");
  }

  details(a){    
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a });
    modal.present();

  }

}
