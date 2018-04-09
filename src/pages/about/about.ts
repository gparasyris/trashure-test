import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { text } from '../../assets/data/loremipsum';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  displayText;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.displayText = text;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
