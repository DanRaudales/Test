import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController,NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  arrayFavoritos:any={};

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage,
    private api: ApiServiceProvider,
    public navParams: NavParams) {
    /*this.storage.get('fav').then((val) => {
      this.schools = val;
    });*/
    this.arrayFavoritos = this.navParams.get("fav");

  }


  /*ionViewDidLoad(){
    this.api.getData().subscribe((data) =>{
      this.users = data['results'];
    }, (error) => {
      console.error(error)
    });
  }

  details(a){
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a, star: true });
    modal.present();
  }*/

}
