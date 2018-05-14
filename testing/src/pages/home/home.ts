import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { FavoritesPage } from '../favorites/favorites';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home = MapPage;
  favs = FavoritesPage;

  serachbar = false;

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  showSearchBar(){

  }

}
