import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/local-providers.module';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any[] = [];
  constructor(public navCtrl: NavController,  public userProvider: UserProvider) {

    this.data = demoScanned;

  }

  ionViewDidLoad(){
    console.log(this.userProvider.user);
  }

}


let demoScanned = [
  {
    date: Date.now(),
    amount: 5
  },
  {
    date: Date.now(),
    amount: 5
  },
  {
    date: Date.now(),
    amount: 5
  },
  {
    date: Date.now(),
    amount: 5
  },
  {
    date: Date.now(),
    amount: 5
  },
  {
    date: Date.now(),
    amount: 5
  },
]