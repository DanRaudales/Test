import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  iconClass: any;
  school: any;
  star: any;

  constructor(
    public navCtrl: NavController, 
    public storage: Storage,
    public navParams: NavParams
  ) {
    this.school = navParams.get('escuela');
    this.star = navParams.get('star');
    if (this.star){
      this.iconClass = 'icon-star'
    }
    else {
      this.iconClass = 'icon-default';
    }
  }
  
  back(){
    this.navCtrl.pop();
  }

  save(){
    if(this.iconClass == 'icon-default'){
      this.iconClass = 'icon-star';
      this.storage.get('escuelas').then((data) => {
        data.push(this.school)
        this.storage.set('escuelas', data);
      });
    }
    else {
      this.iconClass = 'icon-default';
    }
  }

}
