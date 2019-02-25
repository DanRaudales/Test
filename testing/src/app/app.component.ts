import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import { ApiServiceProvider } from '../providers/api-service/api-service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  searchTerm: any;
  favoritos = [];

  /*favoritos: any[] = [
    {
      Nombre: "4tools Power Systems",
      Direccion: "666"
    },
    {
      Nombre: "C-Estrategia",
      Direccion: "El Inge"
    },
    {
      Nombre: "SITAH",
      Direccion: "666"
    },
    {
      Nombre: "PTREE",
      Direccion: "Dr. Nick ;)"
    },
    {
      Nombre: "PRO PHARMA RESEARCH",
      Direccion: "666"
    },
    {
      Nombre: "EL REFORMA",
      Direccion: "Universidad"
    },
    {
      Nombre: "IFT",
      Direccion: "666"
    },
    {
      Nombre: "OXXO",
      Direccion: "Estación UPIICSA"
    },
    {
      Nombre: "7 ELEVEN",
      Direccion: "Estacion Iztacalco"
    },
    {
      Nombre: "Otro",
      Direccion: "666"
    }];*/

  showSplash = true;
  slides = true;
  places: any = [];

  constructor(
    platform: Platform,
    public storage: Storage,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    public apiService: ApiServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('favoritos').then((data) => {
        if(data){
          this.favoritos = data;
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
      timer(10000).subscribe(() => this.showSplash = false);
    });
  }

  abrirFavorito(fav: any) {
    //this.na//vCtrl.push(DetailsPage, { lugar: a });
    this.nav.push(DetailsPage, { 'lugar': fav });
    this.menuCtrl.close();
  }

  buscar(carrera: String) {
    this.menuCtrl.close();
  }
}
