import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-programa',
  templateUrl: 'programa.html',
})
export class ProgramaPage {

  nombre: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get('actividad');
  }


}
