import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../details/details'

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  favoritos: Promise<any>;
  favs: any

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    this.favs = [];
  }

  ionViewWillEnter() {
    console.log('volvio a entrar')
    this.favoritos = this.getFavoritos()
    this.favoritos.then((val) => {
      console.log('val')
      this.favs = val
    })

    setTimeout(() => {
      //this.favoritos = this.favoritos.JSON()
      console.log('timeout')
      console.log(this.favs)
    }, 2000);
  }

  getFavoritos() {
    let favs = this.storage.get('favoritos')
    return favs;
  }

  ionViewDidLoad() {
  }

  goDetails(a, i) {
    this.navCtrl.push(DetailsPage, { lugar: a, star: 'icon-star', position: i });
  }

  dropFav(index) {
    let alert = this.alertCtrl.create({
      title: '¿Eliminar de favoritos?',
      message: this.favs[index].NOM_CORTO_PRESTATARIO + ' ya no formará parte de sus favoritos',
      buttons: [
        {
          text: 'Quitar',
          handler: () => {
            console.log('Quitar de favoritos');
            this.favs.splice(index, 1)
            this.storage.set('favoritos', this.favs)
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

  back() {
    this.navCtrl.pop();
  }

}
