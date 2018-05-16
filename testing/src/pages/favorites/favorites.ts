import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  schools: any = [];

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public storage: Storage
  ) {
    this.storage.get('escuelas').then((val) => {
      this.schools = val;
    });
  }

  details(a){    
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a, star: true });
    modal.present();
  }

}
