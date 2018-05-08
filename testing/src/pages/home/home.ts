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
  esm: any;
  ese: any;
  esimeaz: any;
  esimecul: any;
  esia: any;
  esiatic: any;
  cicsuma: any;
  upibi; any;
  esit: any;
  dg: any;
  dp: any;
  libcul: any;
  pinteres: any;
  circulo1: any;
  circulo2: any;
  circulo3: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit():void{
    this.upiicsa = [19.395893, -99.092330];
    this.escom = [19.504537, -99.146931];
    this.upiita = [19.511614, -99.126188];
    this.dg = [19.499722, -99.137741];
    this.dp = [19.428857, -99.147456];
    this.libcul = [19.329873, -99.112877];
    this.esm = [19.451279, -99.168182];
    this.ese = [19.454398, -99.168418];
    this.esimeaz = [19.490023, -99.174056];
    this.esimecul = [19.328543, -99.112639];
    this.esia = [19.504720, -99.137017];
    this.esiatic = [19.507284, -99.131257];
    this.cicsuma = [19.080110, -98.959110];
    this.upibi = [19.515435, -99.127259];
    this.esit = [19.340480, -99.134333];
    this.drawMap();
  }

  drawMap(): void {

    this.escuelas =  Leaflet.layerGroup();

    this.pinteres = Leaflet.layerGroup();

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
    Leaflet.marker(this.esm).addTo(this.escuelas).bindPopup('<a href = "http://www.esm.ipn.mx/" target = "_blank">ESM</a>').on('contextmenu', () => {
      this.details('ESM');
    });
    Leaflet.marker(this.ese).addTo(this.escuelas).bindPopup('<a href = "http://www.ese.ipn.mx/" target = "_blank">ESE</a>').on('contextmenu', () => {
      this.details('ESE');
    });
    Leaflet.marker(this.esimeaz).addTo(this.escuelas).bindPopup('ESIME AZCAPOTZALCO').on('contextmenu', () => {
      this.details('ESIME AZCAPOTZALCO');
    });
    Leaflet.marker(this.esimecul).addTo(this.escuelas).bindPopup('ESIME CULHUACAN').on('contextmenu', () => {
      this.details('ESIME CULHUACAN');
    });
    Leaflet.marker(this.esia).addTo(this.escuelas).bindPopup('ESIA').on('contextmenu', () => {
      this.details('ESIA');
    });
    Leaflet.marker(this.esiatic).addTo(this.escuelas).bindPopup('ESIA TICOMÁN').on('contextmenu', () => {
      this.details('ESIA TICOMÁN');
    });
    Leaflet.marker(this.cicsuma).addTo(this.escuelas).bindPopup('CICS UMA').on('contextmenu', () => {
      this.details('CICS UMA');
    });
    Leaflet.marker(this.upibi).addTo(this.escuelas).bindPopup('UPIBI').on('contextmenu', () => {
      this.details('UPIBI');
    });
    Leaflet.marker(this.upibi).addTo(this.escuelas).bindPopup('ESIT').on('contextmenu', () => {
      this.details('ESIT');
    });
    
    this.circulo1 = Leaflet.circle(this.dg, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.pinteres).bindPopup("Instituto Politécnico Nacional");

    this.circulo2 = Leaflet.circle(this.dp, {
      color: 'blue',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.pinteres).bindPopup("Dirección de publicaciones");

    this.circulo3 = Leaflet.circle(this.libcul, {
      color: 'green',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.pinteres).bindPopup("Librería Culhuacán");
    
    this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

    this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    this.grayscale   = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.light'}),
		this.streets  = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.streets'});
    
    this.map = Leaflet.map('map', {
      center: [19.330858, -99.149997],
      zoom: 10,
      layers: [this.streets, this.escuelas]});

      this.baseLayers = {
        "Streets": this.streets,
        "Grayscale": this.grayscale
      };
  
      this.overlays = {
        "Escuelas": this.escuelas,
        "Puntos de interes": this.pinteres
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
          this.container.style.backgroundRepeat = 'no-repeat';
          this.container.style.backgroundPosition = 'center';
          this.container.style.backgroundSize = "25px 25px";
          this. container.style.width = '30px';
          this.container.style.height = '30px';
       
          this.container.onclick = function(){
            map.setView([19.330858, -99.149997], 10);
          }
          return this.container;
        },
      });

      this.map.addControl(new this.customControl());

  }

  details(a){    
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a });
    modal.present();

  }

}
