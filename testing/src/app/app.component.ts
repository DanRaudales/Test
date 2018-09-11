import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { FavoritesPage } from '../pages/favorites/favorites';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  favoritos: any[] = ["4tools Power Systems", "C-ESTRATEGIA","SITAH","PTREE","PRO PHARMA RESEARCH","EL REFORMA","IFT","DIARIO DE MEXICO","OXXO","7 ELEVEN","PLAYGROUND","PORRUA"];

  showSplash = true;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(10000).subscribe(() => this.showSplash = false)
    });
  }

  abrirFavorito(fav){

  }
}
