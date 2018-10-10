import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class ActividadPage {
  nombre:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get('actividad');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActividadPage');
  }

}
