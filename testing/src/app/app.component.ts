import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import {FavoritosPage } from '../pages/favoritos/favoritos'
import { SlidesPage } from '../pages/slides/slides'
import { ApiServiceProvider } from '../providers/api-service/api-service'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SlidesPage;
  searchTerm: any;
  favoritos = [];

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

  goFavoritos(){
    this.nav.push(FavoritosPage)
  }

}
