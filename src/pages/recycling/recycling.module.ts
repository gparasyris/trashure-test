import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclingPage } from './recycling';

@NgModule({
  declarations: [
    RecyclingPage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclingPage),
  ],
})
export class RecyclingPageModule {}
