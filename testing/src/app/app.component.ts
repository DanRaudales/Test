import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController, NavParams, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  favorito:any = FavoritesPage;

  favoritos: any[] = [
    {Nombre:"4tools Power Systems",
      Direccion:"666"},
    {Nombre:"C-Estrategia",
      Direccion:"El Inge"},
    {Nombre:"SITAH",
      Direccion:"666"},
    {Nombre:"PTREE",
      Direccion:"Dr. Nick ;)"},
    {Nombre:"PRO PHARMA RESEARCH",
      Direccion:"666"},
    {Nombre:"EL REFORMA",
      Direccion:"Universidad"},
    {Nombre:"IFT",
      Direccion:"666"},
    {Nombre:"OXXO",
      Direccion:"Estación UPIICSA"},
    {Nombre:"7 ELEVEN",
      Direccion:"Estacion Iztacalco"},
    {Nombre:"Otro",
      Direccion:"666"}];

  showSplash = true;

  constructor(platform: Platform,statusBar: StatusBar,splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(10000).subscribe(() => this.showSplash = false)
    });
  }

  abrirFavorito(fav: any){
    this.nav.push(this.favorito,{'fav':fav});
    this.menuCtrl.close();
  }
}
