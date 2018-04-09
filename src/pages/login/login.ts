import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/local-providers.module';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenticationProvider: AuthenticationProvider,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (this.authenticationProvider.checkCredentials()) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  login() {
    let user = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    }
    this.authenticationProvider.login(user)
      .then((success) => {
        console.log('navigate to login page');
        this.navCtrl.setRoot(HomePage);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
