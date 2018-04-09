import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { recycling_info } from '../../assets/data/recycling-info';
import { text } from '../../assets/data/loremipsum';
import { RecyclingDetails } from './recycling-details';

/**
 * Generated class for the RecyclingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recycling',
  templateUrl: 'recycling.html',
})
export class RecyclingPage {

  data: any[] = [];
  displayText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecyclingPage');
    this.data = recycling_info;
    this.displayText = text;
  }
  showDetails(item){
    item.details = text;
    this.navCtrl.push(RecyclingDetails, {item: item});
  }
}
