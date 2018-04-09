import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclingPage } from './recycling';
import { RecyclingDetails } from './recycling-details';
@NgModule({
  declarations: [
    RecyclingPage
    // RecyclingDetails
  ],
  imports: [
    IonicPageModule.forChild(RecyclingPage),
  ],
  entryComponents:[
    // RecyclingDetails
  ]
})
export class RecyclingPageModule {}
