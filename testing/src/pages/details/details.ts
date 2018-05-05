import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  school: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.school = navParams.get('escuela');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  back(){
    this.navCtrl.pop();
  }

}
