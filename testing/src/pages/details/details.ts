import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActividadPage } from '../actividad/actividad'

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  iconClass: any;
  ss: any;
  star: any;
  position: any;
  actividades: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.ss = navParams.get('lugar');
    this.star = navParams.get('star');
    this.position = navParams.get('position')
    if (this.star) {
      this.iconClass = 'icon-star'
    }
    else {
      this.iconClass = 'icon-default';
    }
  }

  // Función para regresar a la vista anterior
  back() {
    this.navCtrl.pop();
  }

  // Ir a los detalles del programa
  goPrograma(programa) {
    let p = programa;
    this.navCtrl.push(ActividadPage, { actividad: p })
  }

  save() {
    if (this.iconClass == 'icon-default') {
      this.iconClass = 'icon-star';
      this.storage.get('favoritos').then((data) => {
        if (data) {
          let array = data
          array.push(this.ss)
          this.storage.set('favoritos', array);
        } else {
          let array = [];
          array.push(this.ss)
          console.log("else", array);
          this.storage.set('favoritos', array);
        }
      });
    }
    else {

      this.storage.get('favoritos').then((data) => {
        let newFavs = data;
        console.log(newFavs)

        let alert = this.alertCtrl.create({
          title: '¿Eliminar de favoritos?',
          message: newFavs[this.position].NOM_CORTO_PRESTATARIO + ' ya no formará parte de sus favoritos',
          buttons: [
            {
              text: 'Quitar',
              handler: () => {
                console.log('Quitar de favoritos');
                newFavs.splice(this.position, 1)
                this.storage.set('favoritos', newFavs)
                this.iconClass = 'icon-default';
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
      })
    }
  }

}
