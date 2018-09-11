import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  schools: any = [];
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage,
    private api: ApiServiceProvider
  ) {
    this.storage.get('fav').then((val) => {
      this.schools = val;
    });
  }

  ionViewDidLoad(){
    this.api.getData().subscribe((data) =>{
      this.users = data['results'];
    }, (error) => {
      console.error(error)
    });
  }

  details(a){
    let modal = this.modalCtrl.create(DetailsPage, { escuela: a, star: true });
    modal.present();
  }

}
