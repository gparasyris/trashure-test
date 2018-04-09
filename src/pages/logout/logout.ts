import {LoginPage} from '../login/login';
import {Component, Inject, forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/local-providers.module';



@Component({
   template: ``
})

export class LogoutPage {
    constructor(private nav: NavController,
      @Inject(forwardRef(() => AuthenticationProvider)) private authentication: AuthenticationProvider
      ) {
      this.authentication.logout();
      this.nav.setRoot('LoginPage', {
        sent: 'logout'
      });
    }
}