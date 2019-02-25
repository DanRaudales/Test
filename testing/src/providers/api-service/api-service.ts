import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  places: any = [];

  constructor(public http: HttpClient) {

  }

  getPlaces() {

    console.log('Start map')

    /*this.http.get('http://192.168.0.8:3000/api/lugares').subscribe((res) =>{
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

    },(error)=>{console.log(error)})*/

    this.places = [
      {
        Nombre: "4tools Power Systems",
        NOM_CORTO_PRESTATARIO: "4tools Power Systems",
        Direccion: "666",
        PROGRAMA: 'LAI',
        COORDENADAS: {
          lat: 19.432634,
          lng: -98.9360871
        }
      },
      {
        Nombre: "C-Estrategia",
        PROGRAMA: 'LCI',
        NOM_CORTO_PRESTATARIO: "C-Estrategia",
        Direccion: "El Inge",
        COORDENADAS: {
          lat: 19.3959937,
          lng: -99.0940906
        }
      },
      {
        Nombre: "EL REFORMA",
        NOM_CORTO_PRESTATARIO: "EL REFORMA",
        Direccion: "Universidad",
        PROGRAMA: 'INI',
        COORDENADAS: {
          lat: 19.38053,
          lng: -99.1790513
        }
      },
      {
        Nombre: "IFT",
        NOM_CORTO_PRESTATARIO: "IFT",
        PROGRAMA: 'LCI',
        Direccion: "666",
        COORDENADAS: {
          lat: 19.3818329,
          lng: -99.1788995
        }
      },
    ];

    return this.places

  }

  // Función para hacer el filtrado de lugares
  filterData(term) {
    // Generar el array de todos los lugares
    let array = this.getPlaces();
    console.log('Filtrar por: ' + term)
    console.log(array)
    return array.filter((item) => {
      return item.PROGRAMA.toLowerCase().indexOf(
        term.toLowerCase()) > -1;
    });

  }

  /*// Función para llamar el pipe de filtrado de datos
  filterItems(searchTerm){
    
    return this.apiService.places.filter((item) => {
        return item.PROGRAMA.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     

  }*/

}
