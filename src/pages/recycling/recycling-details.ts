import { LoginPage } from '../login/login';
import { Component, Inject, forwardRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/local-providers.module';



@Component({
  selector: 'recycling-details',
  templateUrl: 'recycling-details.html'
})
export class RecyclingDetails {
  item: any;
  title: string = '';
  constructor(private nav: NavController, private navParams: NavParams
  ) {
    this.item = this.navParams.get('item');
    this.title = this.item.title;
  }
}