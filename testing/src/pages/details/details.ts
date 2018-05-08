import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  iconClass: any;
  school: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.school = navParams.get('escuela');
    this.iconClass = 'icon-default'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  back(){
    this.navCtrl.pop();
  }

  save(){
    if(this.iconClass == 'icon-default'){
      this.iconClass = 'icon-star';
    }
    else {
      this.iconClass = 'icon-default';
    }
  }

}
