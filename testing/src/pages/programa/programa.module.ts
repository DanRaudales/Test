import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramaPage } from './programa';

@NgModule({
  declarations: [
    ProgramaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramaPage),
  ],
})
export class ProgramaPageModule {}
