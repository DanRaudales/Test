import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { FavoritesPage } from '../favorites/favorites';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home = MapPage;
  favs = FavoritesPage;

  favorites: any;
  stateForm: FormGroup;
  serachbar = false;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private fb: FormBuilder,
  ) {
    this.initForm();
    this.storage.get('escuelas').then((data) => {
      if (data == null){
        this.storage.set('escuelas', []);
      }
      else {
        this.favorites = data;
      }
    });
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  selectValue(value){
    this.stateForm.patchValue({"search": value});
  }

  getSearchValue(){
    return this.stateForm.value.search;
  }

}
