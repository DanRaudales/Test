import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any; // Instancia del mapa
  favorites: any; // Array de favoritos
  places: any; // Array de luhares

  baseLayers: any;
  customControl: any;
  mbAttr: any;
  mbUrl: any;
  grayscale: any; // Vista escala de grises del mapa
  streets: any; // Vista calles del mapa

  coo: any; // Coordenadas

  markerGroup: any; // Grupo (layer) de marcadores del mapa
  markers = []; // Array con los marcadores de los lugares

  favoritos: any = [];
  markerFavorites: any = [];
  backupMarkers: any = [];
  iconFavName = 'star-outline';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public apiService: ApiServiceProvider,
    public storage: Storage
  ) {
    this.storage.get('favoritos').then((data) => {
      if (data) {
        this.favoritos = data;
        // Iterar en cada lugar que se recibe
        this.favoritos.forEach(ss => {
          let coor: any[] = [ss.COORDENADAS.lat, ss.COORDENADAS.lng]; // Crear un array con las coordenadas del lugar
          // Añadir el lugar al array de los marcadores
          this.markerFavorites.push(Leaflet.marker([coor[0], coor[1]]).bindPopup(ss.NOM_CORTO_PRESTATARIO).on('contextmenu', () => {
            this.details(ss);
          }))
        });
      }
    }); 
  }

  alertFavorites() {
    console.log(this.iconFavName)
    // Validar que alerta se va a mostrar si para mostrar o para ocultar los favoritos
    if (this.iconFavName == 'star-outline') {
      // Alerta de confirmación para mostrar los favoritos
      this.alertShowFavorites()
    } else {
      // Alerta de confirmación para ocultar los favoritos y mostrar los marcadores anteriores
      this.alertHideFavorites()
    }
  }

  // Confirmación para ocultar los favoritos y mostrar los marcadores anterirores
  alertHideFavorites() {
    let confirm = this.alertCtrl.create({
      title: '¿Desea ocultar sus favoritos?',
      message: 'Se mostraran los marcadores anteriores',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Ocultar favoritos');
            // Iterar en los marcadores que se muestran
            for (let i = 0; i < this.markers.length; i++) {
              this.map.removeLayer(this.markers[i]) // Remover los marcadores del layer del mapa
            }
            this.markers = []; // Limpiar el array de los marcadores 
            this.markers = this.backupMarkers; // Asignar los marcadores al array
            this.backupMarkers = [] // Vaciar el backup de los marcadores
            this.markerGroup = Leaflet.layerGroup(this.markers) // Crear un layerGroup para el mapa
            this.map.addLayer(this.markerGroup) // Añadir el nuevo layer al mapa
            this.iconFavName = 'star-outline'
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  // Confirmación para mostrar los favoritos
  alertShowFavorites() {
    let confirm = this.alertCtrl.create({
      title: '¿Desea ver sus favoritos?',
      message: 'Solo se verán sus favoritos en pantalla',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Mostrar solo favoritos');

            // Crear un backup de los marcadores que se mostraban antes de los favoritos
            this.backupMarkers = this.markers;

            // Iterar en los marcadores que se muestran
            for (let i = 0; i < this.markers.length; i++) {
              this.map.removeLayer(this.markers[i]) // Remover los marcadores del layer del mapa
            }
            this.markers = []; // Limpiar el array de los marcadores 
            this.showMarkers(this.favoritos); // Generar el nuevo array de los marcadores
            this.markerGroup = Leaflet.layerGroup(this.markers) // Crear un layerGroup para el mapa
            this.map.addLayer(this.markerGroup) // Añadir el nuevo layer al mapa
            this.iconFavName = 'star'
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  // Mostrar alerta de filtrado de programas academicos
  showAlert() {
    // Crear alerta
    let alert = this.alertCtrl.create();
    // Agregar un titulo a la alerta
    alert.setTitle('Programa académico');

    // Agregar opción de selección LCI
    alert.addInput({
      type: 'radio',
      label: 'Lic. Ciencias de la Informática',
      value: 'LCI',
      checked: true
    });

    // Agregar opción de selección INI
    alert.addInput({
      type: 'radio',
      label: 'Ing. Informática',
      value: 'INI',
      checked: false
    });

    // Agregar opción de selección LAI
    alert.addInput({
      type: 'radio',
      label: 'Lic. Administración Industrial',
      value: 'LAI',
      checked: false
    });

    // Agregar botón para aplicar los cambios respecto a la opción seleccionada
    alert.addButton({
      text: 'Aplicar',
      // Trigger al dar click en aceptar
      handler: data => {
        console.log('Seleccionado ' + data)
        // Crear un array con los lugares giltrados
        let newPlaces = this.apiService.filterData(data);
        console.log('Nuevo array')
        console.log(newPlaces)
        // Iterar en los marcadores que se muestran
        for (let i = 0; i < this.markers.length; i++) {
          this.map.removeLayer(this.markers[i]) // Remover los marcadores del layer del mapa
        }
        this.markers = []; // Limpiar el array de los marcadores 
        this.showMarkers(newPlaces); // Generar el nuevo array de los marcadores
        this.markerGroup = Leaflet.layerGroup(this.markers) // Crear un layerGroup para el mapa
        this.map.addLayer(this.markerGroup) // Añadir el nuevo layer al mapa
      }
    });

    alert.addButton('Cerrar'); // Agregar botón para cerrar la alerta
    alert.present(); // Mostrar la alerta creada

  }

  // Función que se ejecuta cuando se carga la vista
  ionViewDidLoad() {

    // Llamar a la función para traer todos los lugares
    this.places = this.apiService.getPlaces();

    this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

    this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    this.grayscale = Leaflet.tileLayer(this.mbUrl, { id: 'mapbox.light' }),
      this.streets = Leaflet.tileLayer(this.mbUrl, { id: 'mapbox.streets' });

    this.showMarkers(this.places); // Generar el array con los marcadores
    this.markerGroup = Leaflet.layerGroup(this.markers) // Crear el layerGroup con los marcadores

    this.map = Leaflet.map('map', {
      center: [19.395893, -99.092330],
      zoom: 12,
      maxZoom: 18,
      layers: [this.streets, this.markerGroup]
    });

    this.baseLayers = {
      "Streets": this.streets,
      "Grayscale": this.grayscale,
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
        this.container.style.width = '34px';
        this.container.style.height = '34px';

        this.container.onclick = function () {
          map.setView([19.395893, -99.092330], 12);
        }
        return this.container;
      },
    });

    this.map.addControl(new this.customControl());

  }

  // Función para generar el array de los marcadores
  showMarkers(places) {
    // Iterar en cada lugar que se recibe
    places.forEach(ss => {
      let coor: any[] = [ss.COORDENADAS.lat, ss.COORDENADAS.lng]; // Crear un array con las coordenadas del lugar
      // Añadir el lugar al array de los marcadores
      this.markers.push(Leaflet.marker([coor[0], coor[1]]).bindPopup('<a href="https://serviciosocial.ipn.mx/" target="_blank">' + ss.NOM_CORTO_PRESTATARIO + '</a>').on('contextmenu', () => {
        this.details(ss);
      }))
    });
  }

  // Ir a los detalles de la empresa
  details(a) {
    this.navCtrl.push(DetailsPage, { lugar: a });
  }

  // Mostrar y ocultar el menú
  abrirMenu() {
    this.menuCtrl.toggle();
  }

}
